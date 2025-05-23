const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');
const smsRoutes = require('./routes/sms.routes');

const app = express();

app.use(cors());


connectToDb();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/sms', smsRoutes); // ✅ Add Twilio Route

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post("/send-sms", (req, res) => {
    const { to, body } = req.body;

    if (!to || !body) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("Sending SMS to:", to);
    console.log("Message:", body);

    return res.json({ message: "SMS sent successfully!" });
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app;