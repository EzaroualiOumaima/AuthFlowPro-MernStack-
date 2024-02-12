import rolesController from "../controllers/rolesController";

import express from "express"
import authMiddleware from "../middlewares/authMiddleware";
const routerRoles = express.Router();


routerRoles.post("/",authMiddleware, rolesController.createRole);
routerRoles.get("/", authMiddleware, rolesController.getRole);
routerRoles.get("/:id", authMiddleware, rolesController.getRoleById);
routerRoles.put("/:id",authMiddleware, rolesController.updateRole);
routerRoles.delete("/:id",authMiddleware, rolesController.deleteRole);

export default routerRoles ;