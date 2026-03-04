import express from "express";
import cors from "cors"
import usuariosRoutes from "./routes/usuariosRoutes.js"


const app=express();
app.use(express.json()) //formato json
app.use(cors())//ponte entre o frontend e o backend

app.get("/", (req, res)=>{
    res.json({msg: "hello world"});
})

app.use("/usuarios", usuariosRoutes)

export default app
