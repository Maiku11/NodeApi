import mongoose from "mongoose";


const userScheme = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

export const Users = mongoose.model("Users", userScheme);