import rolesController from "../controllers/rolesController";

import express from "express"
const routerRoles = express.Router();


routerRoles.post("/", rolesController.createRole);
routerRoles.get("/", rolesController.getRole);
routerRoles.get("/:id", rolesController.getRoleById);
routerRoles.put("/:id", rolesController.updateRole);
routerRoles.delete("/:id", rolesController.deleteRole);

export default routerRoles ;