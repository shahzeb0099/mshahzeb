import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data?.message) {
      return NextResponse.json(
        { success: false, message: "Message is required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "mshahzeb1905050100043@gmail.com",
        pass: "rbpfhwdjtumghskm",
      },
    });

    let subject = `Service Request Form - ${data.name}`;

    let html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Service Request</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding: 30px 0;">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.08); overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#0f172a; color:#ffffff; padding:20px; text-align:center;">
                <h2 style="margin:0;">Service Request Form</h2>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px;">
                <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
                  
                  <tr>
                    <td style="font-weight:bold; width:150px; border-bottom:1px solid #e5e7eb;">Name</td>
                    <td style="border-bottom:1px solid #e5e7eb;">${data.name}</td>
                  </tr>

                  <tr>
                    <td style="font-weight:bold; border-bottom:1px solid #e5e7eb;">Email</td>
                    <td style="border-bottom:1px solid #e5e7eb;">${data.email}</td>
                  </tr>

                  <tr>
                    <td style="font-weight:bold; border-bottom:1px solid #e5e7eb;">Phone</td>
                    <td style="border-bottom:1px solid #e5e7eb;">${data.phone}</td>
                  </tr>

                  <tr>
                    <td style="font-weight:bold; vertical-align:top;">Message</td>
                    <td>
                      <div style="background:#f9fafb; padding:12px; border-radius:4px;">
                        ${data.message}
                      </div>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f5f9; padding:12px; text-align:center; font-size:12px; color:#64748b;">
                This email was generated from the Service Request form.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    await transporter.sendMail({
      from: `"Service Request" <mshahzeb1905050100043@gmail.com>`,
      to: "mshahzeb1905050100043@gmail.com",
      subject: subject,
      html: html,
    });

    /* VERY IMPORTANT */
    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
}
