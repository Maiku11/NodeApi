import { Users } from "../models/user.js";
export const getAllUsers = async (req, res) => {
    const users = await Users.find({});
    console.log(req.query);
    res.json({
        success: true,
        users
    })
}

export const addNewUser = async (req, res) => {
    const { name, email, password } = req.body
    await Users.create({
        name,
        email,
        password,
    })

    res.status(201).json({
        success: true,
        message: "data entered successfully"
    })
}

export const special = (req, res) => {

    res.json({
        success: true,
        message: "just Joking"
    })
}

export const findOne = async (req, res) => {
    const { id } = req.params;
    const user = await Users.findById(id);

    res.json({
        success: true,
        user
    })
}