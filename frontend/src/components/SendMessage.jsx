import { useState } from "react";
import axios from "axios";

const SendMessage = () => {
    const [to, setTo] = useState("");  // Changed variable name
    const [body, setBody] = useState("");  // Changed variable name
    const [response, setResponse] = useState("");

    const handleSendMessage = async () => {
        try {
            console.log(${import.meta.env.VITE_BASE_URL}/sms/send-sms);
            const res = await axios.post(${import.meta.env.VITE_BASE_URL}/sms/send-sms, {
                to,   // ✅ Ensure variable names match backend
                body, // ✅ Ensure variable names match backend
            });

            setResponse(res.data.message || "Message sent successfully!");
        } catch (error) {
            setResponse("Failed to send message");
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center p-5">
            <h2 className="text-2xl font-bold mb-4">Send SMS via Twilio</h2>
            <input
                type="text"
                placeholder="Enter phone number"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="p-2 border border-gray-300 rounded w-80 mb-2"
            />
            <textarea
                placeholder="Enter message"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="p-2 border border-gray-300 rounded w-80 h-20 mb-2"
            />
            <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Send Message
            </button>
            <p className="text-green-500 mt-2">{response}</p>
        </div>
    );
};

export default SendMessage;