const express = require("express");
const router = express.Router();
const { VehicleType } = require("../models");

router.get("/", async (req, res) => {
  const { wheels } = req.query;

  // Validation for missing wheels param
  if (!wheels) {
    return res
      .status(400)
      .json({ error: "Wheels query parameter is required" });
  }

  const wheelsNum = Number(wheels);

  if (!Number.isInteger(wheelsNum) || wheelsNum < 1) {
    return res.status(400).json({ error: "Wheels must be a positive integer" });
  }

  try {
    const types = await VehicleType.findAll({
      where: { wheels: wheelsNum },
      attributes: ["id", "typeName", "wheels"],
    });

    if (types.length === 0) {
      return res
        .status(404)
        .json({ error: `No vehicle types found with ${wheelsNum} wheels` });
    }

    res.json(types);
  } catch (error) {
    console.error("Error fetching vehicle types:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
