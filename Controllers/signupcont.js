// import React from 'react';
const user = require("../Models/SignupModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
exports.signupcont = async (req, res) => {
    const { firstname, lastname, email, contact, password } = req.body;

    try {
        if (!firstname || !lastname || !email || !contact || !password) {
            res.status(400).json({
                success: false,
                message: "Please Enter all Fields"
            });
            return;
        }

        const isregister = await user.findOne({ email });
        if (isregister) {
            res.status(400).json({
                success: false,
                message: "User already exists"
            });
            return; 
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await user.create({
            firstname,
            lastname,
            email,
            contact,
            password: hashedPassword
        });
         
        if (response) {
            res.status(201).json({
                success: true,
                message: "User created successfully"
            });
        }

    } catch (error) {
        res.status(501).json({
            success: false,
            message:error.message
        });
        console.error(error); 
    }
};
