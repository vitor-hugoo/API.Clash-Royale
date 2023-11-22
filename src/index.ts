import express from "express"
import cors from "cors"
import healthRouter from "./routes/health"
import bodyParser from "body-parser";
import dotenv from 'dotenv'

import router from "./routes"
import routerService from "./service/routes";

dotenv.config()

const app = express()

const PORT = process.env.PORT// || 8080
const ENV = process.env.NODE_ENV || 'DEV'

app.use(cors())

app.use(bodyParser.json())

app.use("/api", router)
app.use("/api-service", routerService)

app.use("/", healthRouter)

app.use((req, res) => {
    return res.status(404).json({ message: "Rota não encontrada" });
  });

app.listen(PORT, () =>{
    console.log(`\n Servidor ${ENV} rodando com sucesso em http://localhost:${PORT} \n `)
})
