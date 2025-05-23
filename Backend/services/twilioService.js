require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendSMS = async (message, to) => {
    try {
        const msgOptions = {
            from: process.env.TWILIO_FROM_NUMBER,
            to,
            body: message,
        };

        const response = await client.messages.create(msgOptions);
        console.log('Message sent:', response.sid);
        return { success: true, message: 'SMS sent successfully!' };
    } catch (error) {
        console.error('Error sending SMS:', error);
        return { success: false, error: 'Failed to send SMS' };
    }
};

module.exports = sendSMS;