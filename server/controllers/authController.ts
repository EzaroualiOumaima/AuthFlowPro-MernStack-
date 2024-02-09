import userModel from "../models/user.schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import "dotenv/config"
// Register User

const postRegister = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const { name, email, password , role } = user;
    //check if email is already exist
    const isEmailExist = await userModel.findOne({ email });
    if (isEmailExist) {
      res.status(409).json({
        message: "User with this Email is already exist",
      });
      return;
    }
    // if not create a new user with haching password
    const hachPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hachPassword,
      role
    });
    res.status(201).json({
      success: true,
      message: "user created successfuly",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
  }
};
// Login User

const postLogin = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    
    const { email, password } = user;
    // check if the user exist in the database or not
    const isUserExist = await userModel.findOne({ email });
    if (!isUserExist) {
        return res.status(401).json({ message: "Authentication failed" });
    }
    const passwordMatched = await bcrypt.compare(
        password,
        isUserExist.password
        );
        if (!passwordMatched) {
            return res.status(401).json({ message: "Authentication failed" });
        }
        // console.log( process.env.Secret_key as string);
        
        const token = jwt.sign(
            { userId: isUserExist._id },
            process.env.Secret_key as string,
            { expiresIn: "1d" }
            );
    res.cookie("access_token", token);
    res.status(200).json({
      status: 200,
      success: true,
      message: "login success",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Login Failed" });
  }
};

// logout

const userLoggout = (req: Request, res: Response) => {
  res.clearCookie("access_token");
  res.status(200).json({ message: "User logged out" });
};

export default {
  postLogin,
  postRegister,
  userLoggout,
};
