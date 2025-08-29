const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        validate: {
            validator: function(v) {
                // Regular expression to validate email format
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    contact: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Validate that contact number is exactly 10 digits
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid contact number! It should be 10 digits.`
        }
    },
    password: {
        type: String,
        required: true,
       
    }

});

module.exports = mongoose.model("userv", userSchema);
