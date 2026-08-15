import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/app/components/ui/EmailTemplate";

const CONTACT_EMAIL = "info@aiteratech.com";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured" },
        { status: 500 },
      );
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Aitera Tech <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} desde aiteratech.com`,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    if (error) {
      console.error("Error en /api/send:", error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Error en /api/send:", err);
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 },
    );
  }
}
