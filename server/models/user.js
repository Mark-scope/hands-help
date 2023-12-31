import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Name is required!"]
        },
       
        email: {
            type: String,
            required: [true, "Email is required!"]
        },
        password: {
            type: String,
            required: [true, "Password is required!"],
            minlenth: [6, "Password length should be greater than 6 character!"]
        },
        phone: { type: String },
        location: { type: String },
        accountType: {
            type: String,
        },
        token: { type: String },
        EmergencyPerson: {
            _id: { type: String },
            fullName: { type: String },
            email: { type: String },
        },
        profileUrl: { type: String },
        verified: { type: Boolean, default: false }
    },
    
    { timestamps: true }
);

const Users = mongoose.model("Users", userScheme);

export default Users;