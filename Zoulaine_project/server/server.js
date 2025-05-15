const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
