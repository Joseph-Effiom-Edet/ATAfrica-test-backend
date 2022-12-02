import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import portfolioRoute from "./routes/portfolio.js";
import cors from "cors";

dotenv.config();

const app = express();

//CONNECT TO MONGODB DATABASE USING THE MONGODB URL IN THE .ENV FILE.
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

//USE CORS TO ALLOW RESTRICTED RESOURCES FROM THE BACKEND TO BE ACCESSED BY THE FRONTEND.
app.use(cors());
//DEFAULT ROUTE
app.use("/", portfolioRoute);
app.use(express.json());

//LISTEN ON THE PORT PROVIDED BY THE HOSTING PROVIDER, OR PORT 5000 ON A LOCAL MACHINE.
app.listen(process.env.PORT || 5000, () => {
  console.log("Server Connected!!!");
});
