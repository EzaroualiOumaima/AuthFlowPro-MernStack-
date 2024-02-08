import express from "express";
import "./Connection/connectionDb";
import router  from "./routes/user.routes";
import routerRoles from "./routes/roles.routes";
import routerPermission from "./routes/permission.routes";
const app = express();
const port = 4000;



app.use(express.json());
app.use("/api" , router);
app.use("/api" , routerRoles);
app.use("/api" , routerPermission)


app.listen(port , ()=> {
    console.log("server started")
})
