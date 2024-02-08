import express from "express";
import "./Connection/connectionDb"
const app = express();
const port = 4000;

app.use(express.json());

app.listen(port , ()=> {
    console.log("server started")
})
