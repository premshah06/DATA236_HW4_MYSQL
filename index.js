require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const bookRoutes = require("./routes/book.routes");

app.use(express.json()); // Middleware to parse JSON
app.use("/api", bookRoutes);

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
