import { MailtrapClient } from "mailtrap";

const TOKEN = "e27c45ba633eca773762b9a5c5d09b9f";
const SENDER_EMAIL = "hello@demomailtrap.com";
const RECEIPIENT_EMAIL = "ismaeilsaberi@gmail.com";

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN environment variable is not set");
}

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECEIPIENT_EMAIL }],
    subject: "Hello from mailtrap",
    text: "Welcome to Social Content Generator AI",
  })
  .then(console.log)
  .catch(console.error);
