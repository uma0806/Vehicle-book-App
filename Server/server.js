const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const vehicleTypesRouter = require("./routes/vehicleTypes"); // Adjust path as needed
const vehiclesRouter = require("./routes/vehicles");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use("/api/vehicles", vehiclesRouter);
app.use("/api/vehicle-types", vehicleTypesRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Vehicle Booking Backend is running...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
