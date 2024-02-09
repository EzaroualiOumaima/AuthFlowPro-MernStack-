import permissionController from "../controllers/permissionController";
import express from "express";

const routerPermission = express.Router();

routerPermission.post("/", permissionController.createPermission);
routerPermission.put("/:id", permissionController.updatePermission);


export default routerPermission;

