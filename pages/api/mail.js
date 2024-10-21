import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { my_name, my_email, my_ask, my_num } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      text: `Name: ${my_name}\nEmail: ${my_email}\nMobile: ${my_num}\nMessage: ${my_ask}`,
      html: `<p><strong>Name:</strong> ${my_name}</p>
             <p><strong>Email:</strong> ${my_email}</p>
              <p><strong>Mobile:</strong> ${my_num}</p>
             <p><strong>Message:</strong> ${my_ask}</p>`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
