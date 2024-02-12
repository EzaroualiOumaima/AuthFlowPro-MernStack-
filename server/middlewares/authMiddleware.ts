import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import roleModel from "../models/roles.schema";
import dotenv from "dotenv";
dotenv.config();

// Build the mapping between HTTP methods and associated actions
const httpMethodsActions: { [key: string]: string } = {
  GET: "READ",
  POST: "CREATE",
  PUT: "UPDATE",
  PATCH: "UPDATE",
  DELETE: "DELETE",
};

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Extract authorization header from the request
  const auth = req.headers.authorization;
  // Extract root route name from the URL
  const rootName = req.baseUrl.split("/")[2];
  // Extract HTTP method from the request
  const reqMethod = req.method;
  // Get the corresponding action for the HTTP method or "Unknown" if undefined
  const result = httpMethodsActions[reqMethod] || "Unknown";
  // Build the permission by combining route name and HTTP method action
  const rolePermission = `${result}_${rootName}`.toUpperCase();

  // If no authorization header is found, send a 401 error response
  if (!auth) {
    return res.status(401).json({ message: "Token not found" });
  }
  // Split JWT token from the authorization header
  const token = auth.split(" ")[1];

  // Verify the token using the secret key stored in the environment variable process.env.JWT_SECRET
  if (token) {
    jwt.verify(
      token,
      process.env.SECRET_KEY as string,
      async (err: any, decodedToken: any) => {
        console.log(rolePermission);

        // Find user's role in the database and populate the "permissions" property
        const userRole = await roleModel
          .findById(decodedToken?.role)
          .populate("permissions");
        console.log(userRole);

        // Check if the user has the necessary permission
        const hasPermission = userRole?.permissions.some(
          (perm: any) => perm.name === rolePermission
        );
        console.log(hasPermission);
        // If the user doesn't have the permission, send a 401 error response
        if (!hasPermission)
          return res.status(401).json({ message: "Unauthorized" });

        // If there's an error while verifying the token, send a 403 error response
        if (err) {
          return res.status(403).json({ message: "Invalid token" });
        } else {
          // If everything is valid, proceed to the next middleware or the next route
          next();
        }
      }
    );
  } else {
    // If no token is found, send a 404 error response
    return res.status(404).json({ message: "Token not found" });
  }
};

export default authMiddleware;
