import permissionController from "../controllers/permissionController";
import express from "express";

const routerPermission = express.Router();

routerPermission.post("/permissions", permissionController.createPermission);
routerPermission.put("/permissions/:id", permissionController.updatePermission);


export default routerPermission;

