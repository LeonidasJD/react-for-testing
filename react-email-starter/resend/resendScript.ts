import { Resend } from "resend";
import WelcomeEmail from "../emails/welcome-email";
import * as dotenv from "dotenv";

// Učitaj environment varijable iz .env fajla
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendWelcomeEmail() {
  try {
    console.log("📧 Sending email...");

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "milandj@comit.co.rs",
      subject: "Welcome to our service!",
      react: WelcomeEmail(),
    });

    console.log("✅ Email sent successfully!");
    console.log("📋 Details:", data);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    process.exit(1);
  }
}

sendWelcomeEmail();
