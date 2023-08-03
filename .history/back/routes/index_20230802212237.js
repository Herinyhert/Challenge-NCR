const { Router } = require("express");
const dataBase = require("./database.json");

const characterRouter = Router();

dataRouter.get("/", (req, res) => {
  res.status(200).json(dataBase);
});

module.exports = dataRouter;