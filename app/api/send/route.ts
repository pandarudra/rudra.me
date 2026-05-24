import { Resend } from "resend";
import { resend_key, from_email, my_email } from "@/constants";
import { NextRequest } from "next/server";

const resend = new Resend(resend_key);
const fallbackFromEmail = "onboarding@resend.dev";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sendEmail = async (sender: string, email: string, message: string) => {
  return resend.emails.send({
    from: sender,
    to: [my_email],
    subject: `New message from ${email}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h5 style="font-size: 20px; margin-bottom: 12px;">New Message from ${escapeHtml(email)}</h5>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  });
};

export async function POST(req: NextRequest) {
  try {
    if (!resend_key) {
      return Response.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 },
      );
    }

    if (!my_email) {
      return Response.json(
        { error: "MY_EMAIL is not configured." },
        { status: 500 },
      );
    }

    const data = await req.json().catch(() => null);
    const email = data?.email;
    const message = data?.message;

    if (!email || !message) {
      return Response.json(
        { error: "Email and message are required." },
        { status: 400 },
      );
    }

    const primarySender = from_email || fallbackFromEmail;
    const { data: sentData, error } = await sendEmail(
      primarySender,
      email,
      message,
    );

    if (!error) {
      return Response.json(sentData);
    }

    if (
      process.env.NODE_ENV === "development" &&
      primarySender !== fallbackFromEmail
    ) {
      const retry = await sendEmail(fallbackFromEmail, email, message);

      if (!retry.error) {
        return Response.json(retry.data);
      }

      return Response.json(
        {
          error:
            retry.error?.message ?? retry.error ?? "Failed to send message.",
        },
        { status: 500 },
      );
    }

    return Response.json(
      {
        error: error?.message ?? error ?? "Failed to send message.",
      },
      { status: 500 },
    );
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to send message.",
      },
      { status: 500 },
    );
  }
}
