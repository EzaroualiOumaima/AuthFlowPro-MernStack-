import permissionModel from "../models/permission.schema";
import {Request , Response} from 'express';

const createPermission = async (req: Request, res: Response) => {
    try {
      const response = await permissionModel.create(req.body);
      res.status(201).json({
        newData: response,
        msg: "Permission is created",
      });
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  };

  const updatePermission = async (req: Request, res: Response) => {
    try {
      const response = await permissionModel.findByIdAndUpdate(
        req.params.id,
        req.body ,
        { new: true }
      );
      res.status(200).json({
        newData: response,
        msg: "Permission upadated successfuly",
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  const deletePermission = async (req: Request, res: Response) => {
    try {
      await permissionModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        msg: "Permission deleted successfuly",
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  const getAllPermissions = async (req: Request, res: Response) => {
    try {
      const response = await permissionModel.find();
      res.status(200).json({
        newData: response,
        msg: "All permissions are fetched",
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };


  export default {
    createPermission,
    updatePermission,
    deletePermission,
    getAllPermissions
    
  }