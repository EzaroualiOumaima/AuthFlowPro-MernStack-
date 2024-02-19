import express from "express";
import "./Connection/connectionDb";
import yaml from 'yamljs';
import router  from "./routes/user.routes";
import routerRoles from "./routes/roles.routes";
import routerPermission from "./routes/permission.routes";
import authrouter from "./routes/auth.routes";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
const app = express();
const port = 4000;
const swaggerDocument = yaml.load('./swagger.yaml');
app.use('/AuthFlow', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.use(cors())
app.use(express.json());
app.use("/api/users" , router);
app.use("/api/roles" , routerRoles);
app.use("/api/permissions" , routerPermission);
app.use("/auth" , authrouter )


app.listen(port , ()=> {
    console.log("server started")
})
