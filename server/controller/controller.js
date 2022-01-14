const models = require("../models");

exports.getMakes = async (req, res) => {
  try {
    const makes = await models.Makes.findAll();
    res.status = 200;
    res.send(makes);
  } catch (e) {
    console.log(`🛑🛑🛑 getMakes in controller F-ed up ¯\(◉◡◔)/¯:`, e);
    res.sendStatus(500);
  }
};

exports.getModels = async (req, res) => {
  try {
    const data = await models.Models.findAll({
      where: {
        makes_id: req.body.id,
      },
    });
    if (data === null) {
      console.log("Not found!");
      res.status(404);
      res.send("No data!");
    } else {
      res.status(200);
      res.send(data);
    }
  } catch (e) {
    console.log(`🛑🛑🛑 getMakes in controller F-ed up ¯\(◉◡◔)/¯:`, e);
    res.sendStatus(500);
  }
};

exports.getGenerations = async (req, res) => {
  try {
    const data = await models.Generations.findAll({
      where: {
        models_id: req.body.id,
      },
    });
    if (data === null) {
      console.log("Not found!");
      res.status(404);
      res.send("No data!");
    } else {
      res.status(200);
      res.send(data);
    }
  } catch (e) {
    console.log(`🛑🛑🛑 getSpecs in controller F-ed up ¯\(◉◡◔)/¯:`, e);
    res.sendStatus(500);
  }
};

exports.getEngine = async (req, res) => {
  try {
    const data = await models.Engines.findAll({
      where: {
        id: req.body.id,
      },
    });
    if (data === null) {
      console.log("Not found!");
      res.status(404);
      res.send("No data!");
    } else {
      res.status(200);
      res.send(data);
    }
  } catch (e) {
    console.log(`🛑🛑🛑 getEngine in controller F-ed up ¯\(◉◡◔)/¯:`, e);
    res.sendStatus(500);
  }
};

exports.getInfo = async (req, res) => {
  try {
    const generation = await models.Generations.findOne({
      where: {
        id: req.body.IDs[0],
      },
    });
    const engine = await models.Engines.findOne({
      where: {
        id: req.body.IDs[1],
      },
    });
    if (engine === null || generation === null) {
      console.log("Not found!");
      res.status(404);
      res.send("No data!");
    } else {
      res.status(200);
      res.send([generation, engine]);
    }
  } catch (e) {
    console.log(`🛑🛑🛑 getInfo in controller F-ed up ¯\(◉◡◔)/¯:`, e);
    res.sendStatus(500);
  }
};
