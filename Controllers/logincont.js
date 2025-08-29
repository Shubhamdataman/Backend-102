const bcrypt = require('bcrypt');
const user = require('../Models/SignupModel');

const jwt = require("jsonwebtoken");
const JWT_SECRET1= process.env.JWT_SECRET
exports.logincont = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter both email and password",
            });
        }

        
        const userResult = await user.findOne({ email });
        if (!userResult) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        
        const isPasswordValid = await bcrypt.compare(password, userResult.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        const token = jwt.sign(
            { id: userResult._id, email: userResult.email }, 
            JWT_SECRET1,                                   
            { expiresIn: "1h" }                            
        );


        return res.status(200).json({
            success: true,
            message: "Login successful",
            token
        });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
