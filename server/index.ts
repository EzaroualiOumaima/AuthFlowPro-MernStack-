import express from "express";
import "./Connection/connectionDb";
import router  from "./routes/user.routes";
import routerRoles from "./routes/roles.routes";
const app = express();
const port = 4000;



app.use(express.json());
app.use("/api" , router);
app.use("/api" , routerRoles);


app.listen(port , ()=> {
    console.log("server started")
})
