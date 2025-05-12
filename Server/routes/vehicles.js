const express = require("express");
const router = express.Router();
const { Vehicle } = require("../models");

router.get("/", async (req, res) => {
  const typeId = parseInt(req.query.typeId);

  if (!typeId)
    return res.status(400).json({ error: "Missing typeId query param" });

  try {
    const vehicles = await Vehicle.findAll({
      where: { vehicleTypeId: typeId },
    });
    console.log("vehicles**");
    res.json(vehicles);
  } catch (error) {
    console.log("error get");
    // res.status(500).json({ error: "Failed to fetch vehicles" });
    res.status(500).json({ error: error });
  }
});

module.exports = router;
