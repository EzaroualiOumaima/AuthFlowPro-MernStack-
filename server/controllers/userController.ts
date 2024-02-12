import userModel from "../models/user.schema";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  try {
    const response = await userModel.create(req.body);
    res.status(201).json({
      newData: response,
      msg: "User is created",
    });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const response = await userModel.find().populate({path :"role"});
    res.status(200).json({
      newData: response,
      msg: "All user are fetched",
    });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const response = await userModel.findById(req.params.id);
    res.status(200).json({
      newData: response,
      msg: "User is fetched",
    });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const response = await userModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      newData: response,
      msg: "User upadated successfuly",
    });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
     await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "User deleted successfuly",
    });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
