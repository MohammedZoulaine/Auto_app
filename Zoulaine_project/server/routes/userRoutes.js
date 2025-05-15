const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

router.post("/register", async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ fullname, email, password });
        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: savedUser._id,
                fullname: savedUser.fullname,
                email: savedUser.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, fullname: user.fullname },
            JWT_SECRET,
            { expiresIn: "1h" } 
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post("/logout", (req, res) => {
    res.status(200).json({ message: "User logged out successfully" });
});

module.exports = router;
