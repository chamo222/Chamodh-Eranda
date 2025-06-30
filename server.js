import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// allow all
app.use(cors());

// parse JSON
app.use(express.json());

// simple test route
app.get("/", (req, res) => {
  res.send("Backend server is running ✅");
});

// contact route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("EMAIL SEND ERROR", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});