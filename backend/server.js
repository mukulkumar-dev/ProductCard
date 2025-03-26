import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());  // Allows JSON data in req.body
app.use(cors()); // Enables CORS

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/products", productRoutes);

// Sample API Route for Testing
app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.json({ success: true, message: "Product created successfully" });
});

// Start Server (Only One app.listen)
app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});
