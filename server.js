import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter using provided credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'danushubham18@gmail.com',
    pass: 'auln tmoz blqt iwvt' // App Password provided by the user
  }
});

// Verify email connection
transporter.verify((error, success) => {
  if (error) {
    console.log("Nodemailer setup error:", error);
  } else {
    console.log("Nodemailer is ready to send emails!");
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, serviceType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const mailOptions = {
    from: email,
    to: 'danushubham18@gmail.com',
    subject: `Portfolio Contact Form: New Message from ${name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2>New Message from Portfolio Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interested Service:</strong> ${serviceType || 'Not specified'}</p>
        <hr />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
