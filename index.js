const express = require('express');
const cors = require('cors');
const app = express();
const listRoute = require('./routes/listRoute');

// Configuration
require("dotenv").config();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/list", listRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
  