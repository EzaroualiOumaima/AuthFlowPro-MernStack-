import userController from "../controllers/userController";

import express from "express";
const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users", userController.getUser);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

export default router;
