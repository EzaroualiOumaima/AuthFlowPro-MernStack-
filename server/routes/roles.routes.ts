import rolesController from "../controllers/rolesController";

import express from "express"
const routerRoles = express.Router();


routerRoles.post("/roles", rolesController.createRole);
routerRoles.get("/roles", rolesController.getRole);
routerRoles.get("/roles/:id", rolesController.getRoleById);
routerRoles.put("/roles/:id", rolesController.updateRole);
routerRoles.delete("/roles/:id", rolesController.deleteRole);

export default routerRoles ;