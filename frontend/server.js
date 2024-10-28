const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const middleware = require('./middleware');
const Users = require('./model');

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));


mongoose.connect('mongodb+srv://user7042:user7042@cluster7042.4cn8puw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster7042').then(
    () => console.log('Connected to MongoDB')
).catch(err => console.log(err))

app.post('/register', async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;

        // Validation logic
        const errors = {};

        // Check if email is valid and already exists
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(email)) {
            errors.email = "Please enter a valid Gmail address";
        } else {
            const emailExist = await Users.findOne({ email });
            if (emailExist) {
                errors.email = "Email already exists";
            }
        }

        // Check username length
        if (username.length <= 5) {
            errors.username = "Username must be at least 6 characters long";
        }

        // Check password strength
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            errors.password = "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.";
        }

        // Check if passwords match
        if (password !== confirmpassword) {
            errors.confirmpassword = "Passwords do not match";
        }

        // If any errors exist, return them to the client
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the new user
        const newUser = new Users({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).send({
            message: "User created successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal Server Error" });
    }
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                errors: {
                    email: !email ? 'Email is required' : undefined,
                    password: !password ? 'Password is required' : undefined
                }
            });
        }

        // Check if user exists
        const userExist = await Users.findOne({ email });
        if (!userExist) {
            return res.status(400).json({
                errors: {
                    email: 'User not found'
                }
            });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (!isMatch) {
            return res.status(400).json({
                errors: {
                    password: 'Password is incorrect'
                }
            });
        }

        // Create JWT payload
        const payload = {
            user: {
                id: userExist._id
            }
        };

        // Sign and return the token
        jwt.sign(payload, 'secretkey', { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            return res.send({
                message: "User logged in successfully",
                token,
                user: {
                    id: userExist._id,
                    username: userExist.username,
                    email: userExist.email
                }
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/', middleware, async (req, res) => {
    try {
        const user = await Users.findById(req.user.id);
        if (!user) {
            return res.status(400).send('User not found!');
        }
        console.log(user);
        res.send(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
})

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
        return res.status(400).send({ message: 'Please fill in all fields' });
    }

    // Load credentials from environment variables or a secure storage
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: 'STARTTLS', // Use a secure connection
        auth: {
            user: gmailUser,
            pass: gmailPass
        },
    });

    const mailOptions = {
        from: email,
        to: 'galekkala5@gmail.com',
        subject: `Feedback from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send({ message: 'Error sending email' });
        } else {
            console.log(`Email sent: ${info.response}`);
            res.send({ message: 'Email sent successfully' });
        }
    });
});


app.listen(5000, () => {
    console.log('Server running....');
})
