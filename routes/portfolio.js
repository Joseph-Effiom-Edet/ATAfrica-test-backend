import express from "express";
import { Portfolio } from "../models/portfolio.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    return res.json(portfolio);
  } catch (error) {
    console.log(error);
  }
});

export default router;
