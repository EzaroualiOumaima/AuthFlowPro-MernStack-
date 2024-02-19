import express from "express";
import request from "supertest";
import authController from "../controllers/authController";
import authrouter from "../routes/auth.routes";

// Mocking the authController methods
jest.mock('../controllers/authController', () => ({
    postRegister: jest.fn(),
    // postLogin: jest.fn(),
    // userLoggout: jest.fn(),
  }));


const app = express();
app.use(express.json());
app.use('/auth', authrouter);

describe("Auth Router" , () => {
    afterEach(()=> {
        jest.clearAllMocks()
    })
});

it("should call postRegister controller method" , async () => {
    const userData = {
        name : "oumaima",
        email : "oumaima@gmail.com", 
        password : "oum1233",
        role : "ADMIN"
    };
    await request(app).post("/auth/register").send(userData);
    expect(authController.postRegister).toHaveBeenCalledWith(userData)
}
);