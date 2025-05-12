const express = require("express");
const { Booking, Vehicle } = require("../models"); // Import the Booking model
const router = express.Router();

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        {
          model: Vehicle,
          // As Vehicle doesn't have an alias, we don't need to specify it here.
          // If you had a 'bookedVehicle' alias, you'd use: as: 'bookedVehicle'
          attributes: ["id", "model"], // Select attributes
        },
      ],
    });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve bookings" });
  }
});

// Get a specific booking by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: Vehicle,
          attributes: ["id", "model"],
        },
      ],
    });
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve booking" });
  }
});

// Create a new booking
router.post("/", async (req, res) => {
  const { vehicleId, startDate, endDate } = req.body;
  try {
    const vehicle = await Vehicle.findByPk(vehicleId);
    if (!vehicle) {
      return res.status(400).json({ error: "Vehicle does not exist" });
    }

    const newBooking = await Booking.create({ vehicleId, startDate, endDate });
    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create booking" });
  }
});
module.exports = router;
