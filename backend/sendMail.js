import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MAIL_PASS,
  },
});

export const SendMail = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const mailOption = {
      from: `"Blog Request" <${process.env.MAIL_ID}>`,
      to: process.env.MAIL_ID,
      subject: `New Blog Request from ${name}`,
      html: `
        <h3>New Blog Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOption);

    res.status(200).json({
      success: true,
      message: "Mail sent successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send mail" });
  }
};
