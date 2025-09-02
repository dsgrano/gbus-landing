import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const data = await req.json();
    const { business, website, citystate, email, message } = data || {};

    // Optional email via Resend (set RESEND_API_KEY + TO_EMAIL env vars on Vercel)
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL;

    if (apiKey && toEmail) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "GBUS <noreply@yourdomain.com>",
        to: [toEmail],
        subject: "New Mini‑Audit Request",
        text: `Business: ${business || ""}
Website: ${website || ""}
City/State: ${citystate || ""}
Email: ${email || ""}
Message: ${message || ""}`,
      });
      return NextResponse.json({ ok: true, sent: true });
    }

    // Fallback (no email configured)
    console.log("Mini‑audit request (no email configured):", data);
    return NextResponse.json({ ok: true, sent: false });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 400 });
  }
}
