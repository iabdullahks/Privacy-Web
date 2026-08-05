import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'matthenry@championcargollc.com';
const FROM_EMAIL = 'Champion Cargo Contact <noreply@championcargollc.com>';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    full_name,
    company_name,
    email,
    phone,
    service_type,
    message,
    sms_consent,
  } = req.body as Record<string, string>;

  if (!full_name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Inquiry from ${full_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
          <div style="background: #1a1a2e; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
            <p style="color: #9ca3af; margin: 6px 0 0; font-size: 14px;">Champion Cargo LLC — championcargo.com</p>
          </div>
          <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; width: 38%; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 15px;">${full_name}</td>
              </tr>
              ${company_name ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 15px;">${company_name}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 15px;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 15px;"><a href="tel:${phone}" style="color: #3b82f6;">${phone}</a></td>
              </tr>` : ''}
              ${service_type ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 15px;">${service_type}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">SMS Consent</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">
                  <span style="background: ${sms_consent === 'yes' ? '#d1fae5' : '#fee2e2'}; color: ${sms_consent === 'yes' ? '#065f46' : '#991b1b'}; padding: 3px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                    ${sms_consent === 'yes' ? '✓ Opted In' : '✗ Not Opted In'}
                  </span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <p style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</p>
              <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; color: #111827; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                You can reply directly to this email to respond to ${full_name}.<br/>
                Submitted via championcargo.com/contact
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
}
