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
    console.log(name, email, message);

    const mailOption = {
      from: `"send a Message" <${process.env.MAIL_ID}>`,
      to: process.env.MAIL_ID,
      subject: `New Message form Portfolio Website ${name}`,
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    };

    console.log("mail option", mailOption);
    await transporter.sendMail(mailOption);

    res.status(200).json({
      success: true,
      message: "Mail sent successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send mail" });
  }
};
