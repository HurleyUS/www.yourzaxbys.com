import { InviteEmail } from "@/components/emails/invite";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { first, email, eid } = await request.json();
  const inviteEmail = await InviteEmail({ first, email, eid });

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return Response.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "Zaxby's Waynesville, NC Restaurant Manager <notify@yourzaxbys.com>",
      to: [email],
      subject: `Welcome to Zaxby's Waynesville, NC Restaurant`,
      react: inviteEmail,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
