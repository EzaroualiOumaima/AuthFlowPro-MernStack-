import authController from "../controllers/authController";
import express from "express"
const authrouter = express.Router();

authrouter.post('/register' , authController.postRegister);
authrouter.post('/login' , authController.postLogin);
authrouter.post('/logout' , authController.userLoggout);



export default authrouter;
