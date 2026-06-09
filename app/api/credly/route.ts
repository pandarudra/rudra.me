import { NextResponse } from "next/server";
import { credly_username } from "@/constants/e.c";

export async function GET() {
  try {
    const response = await fetch(`https://www.credly.com/users/${credly_username}/badges.json`);
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch badges" }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Credly API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
