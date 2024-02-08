import permissionModel from "../models/permission.schema";
import {Request , Response} from 'express'
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
        { $set: req.body },
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

  export default {
    createPermission,
    updatePermission
  }