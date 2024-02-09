import express from "express";
import "./Connection/connectionDb";
import router  from "./routes/user.routes";
import routerRoles from "./routes/roles.routes";
import routerPermission from "./routes/permission.routes";
import authrouter from "./routes/auth.routes";
const app = express();
const port = 4000;



app.use(express.json());
app.use("/api/users" , router);
app.use("/api/roles" , routerRoles);
app.use("/api/permissions" , routerPermission);
app.use("/auth" , authrouter )


app.listen(port , ()=> {
    console.log("server started")
})
