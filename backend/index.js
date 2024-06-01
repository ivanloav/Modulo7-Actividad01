const express = require("express");
const cors = require("cors");
const sequelize = require("./database");
const Country = require("./models/Country");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/countries", async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Unable to connect to the database:", error));
