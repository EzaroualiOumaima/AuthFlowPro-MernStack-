import jwt  from "jsonwebtoken";
import { Request , Response , NextFunction } from "express";

interface AuthenticatedRequest extends Request {
    userId?: string; 
}
const verifyToken =  (req:AuthenticatedRequest , res:Response , next: NextFunction) => {
    const {access_token} = req.cookies;
    if (!access_token) {
        res.status(401).json({message : "Unauthorized"})

    }
    console.log(access_token);
    try {
        const decodedToken = jwt.verify(access_token , process.env.Secret_key as string) as AuthenticatedRequest;
        // console.log(decodedToken)
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });

        
    }

}


export default verifyToken