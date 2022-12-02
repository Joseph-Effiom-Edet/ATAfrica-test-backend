import express from "express";
import { Portfolio } from "../models/portfolio.js";

const router = express.Router();

//WHEN A GET REQUEST IS MADE FROM THE FRONTEND, FIND ALL THE PORTFOLIOS IN THE DATABASE AND SEND IT TO THE FRONTEND IN FORM OF JSON
router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    return res.json(portfolio);
  } catch (error) {
    //LOG ANY ERRORS TO THE CONSOLE.
    console.log(error);
  }
});

export default router;
