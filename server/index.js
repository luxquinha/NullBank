import express from "express"
import cors from "cors"
import userRoutes from "./routes/users.js"
import { getLogin } from "./controllers/user.js";
import { authenticateToken } from "./middleware.js";

const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', getLogin)

app.use(authenticateToken)

app.use("/", userRoutes)

app.listen(8800, ()=>{
    console.log("Connected")
})