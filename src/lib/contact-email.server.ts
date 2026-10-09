import { Resend } from 'resend';
import { buildContactEmailText, type ContactFormValues } from './contact';

export async function sendContactEmail(values: ContactFormValues): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error('Contact email service is not configured.');
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: values.email,
    subject: `New portfolio message from ${values.name}`,
    text: buildContactEmailText(values),
  });

  if (error) {
    throw new Error('Contact email provider rejected the message.');
  }
}
