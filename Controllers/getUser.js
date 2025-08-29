// import React from 'react';
const user = require("../Models/SignupModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
exports.getUser = async (req, res) => {

    try{
       const response = await user.find({});
       res.status(200).json({
        success:true,
        data:response,
        message:"All data fetched"
       })
    }
    catch (error) {
        res.status(501).json({
            success: false,
            message:error.message
        });
        console.error(error); 
    }
};
