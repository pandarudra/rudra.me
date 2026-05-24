import { api } from "@/constants";

export const useMsg = () => {
  const sendMessage = async (email: string, message: string): Promise<void> => {
    const res = await fetch(api.sendMessage, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    const payload = await res.json().catch(() => null);

    if (!res.ok) {
      console.error(payload?.error ?? "Failed to send message");
      return;
    }

    return payload;
  };

  return { sendMessage };
};
