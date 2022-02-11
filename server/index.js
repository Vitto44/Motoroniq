const express = require("express");
const app = express();
const db = require("./models");
const router = require("./router");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(router);

const PORT = process.env.PORT || 4444;
db.sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`🤖 You good Boss! (☞ﾟヮﾟ)☞ http://localhost:${PORT} ☜(ﾟヮﾟ☜)`)
  );
});
