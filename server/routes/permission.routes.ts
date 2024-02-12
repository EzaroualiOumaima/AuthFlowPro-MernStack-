import permissionController from "../controllers/permissionController";
import express from "express";

const routerPermission = express.Router();

routerPermission.post("/", authMiddleware, permissionController.createPermission);
routerPermission.put("/:id",authMiddleware, permissionController.updatePermission);
routerPermission.get("/" , authMiddleware, permissionController.getAllPermissions);
routerPermission.delete(":/id" , authMiddleware , permissionController.deletePermission)


export default routerPermission;

