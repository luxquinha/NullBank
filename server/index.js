import express from "express"
import cors from "cors"
import userRoutes from "./routes/users.js "

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes)

const PORT = process.env.PORT || 8800;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});