import userController from "../controllers/userController";

import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
const router = express.Router();

router.post("/", authMiddleware, userController.createUser);
router.get("/",  authMiddleware, userController.getUser);
router.get("/:id",authMiddleware, userController.getUserById);
router.put("/:id",authMiddleware, userController.updateUser);
router.delete("/:id",authMiddleware, userController.deleteUser);

export default router;
