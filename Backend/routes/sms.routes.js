// routes/sms.routes.js
const express = require('express');
const router = express.Router();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !twilioPhone) {
  console.error("Twilio credentials are missing. Check your .env file!");
}

const client = twilio(accountSid, authToken);

router.post('/send-sms', async (req, res) => {
  const { to, body } = req.body;

  if (!to || !body) {
    return res.status(400).json({ success: false, error: "Missing 'to' or 'body'." });
  }

  try {
    const message = await client.messages.create({
      body,
      from: twilioPhone,
      to,
    });

    res.status(200).json({ success: true, messageSid: message.sid });
  } catch (error) {
    console.error("SMS Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;