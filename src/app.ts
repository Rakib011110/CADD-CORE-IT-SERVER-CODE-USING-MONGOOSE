import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
// import routes from "./routes";
// import connectDB from "./config/db";

dotenv.config();
// connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Hello mongodb!");
  });
  


export default app;
