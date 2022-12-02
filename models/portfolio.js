import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  tolerance: { type: Number },
  nigerianStocks: { type: Number },
  foreignStocks: { type: Number },
  techStocks: { type: Number },
  emergingStocks: { type: Number },
  nigerianBonds: { type: Number },
  foreignBonds: { type: Number },
  commodities: { type: Number },
  realEstate: { type: Number },
  tBills: { type: Number },
  alternatives: { type: Number },
});

export const Portfolio = mongoose.model("Portfolio", PortfolioSchema);
