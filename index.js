import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import portfolioRoute from "./routes/portfolio.js";
import cors from "cors";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/", portfolioRoute);
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Connected!!!");
});
