import roleModel from "../models/roles.schema";
import { Request, Response } from "express";

const createRole = async (req: Request, res: Response) => {
  try {
    const response = await roleModel.create(req.body);
    res.status(201).json({
      newData: response,
      msg: "Role is created",
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const getRole = async (req: Request, res: Response) => {
  try {
    const response = await roleModel.find();
    res.status(200).json({
      newData: response,
      msg: "All roles are fetched",
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const getRoleById = async (req: Request, res: Response) => {
  try {
    const response = await roleModel.findById(req.params.id);
    res.status(200).json({
      newData: response,
      msg: "Role is fetched",
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const updateRole = async (req: Request, res: Response) => {
  try {
    const response = await roleModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      newData: response,
      msg: "Role upadated successfuly",
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const deleteRole = async (req: Request, res: Response) => {
  try {
    await roleModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Role deleted successfuly",
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  createRole,
  getRole,
  getRoleById,
  updateRole,
  deleteRole,
};
