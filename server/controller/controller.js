const models = require("../models");

exports.getMakes = async (req, res) => {
  try {
    const makes = await models.Makes.findAll();
    res.status = 200;
    res.send(makes);
  } catch (e) {
    console.log(`🛑🛑🛑 getMakes in controller F-ed up ¯\\(◉◡◔)/¯:`, e);
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
    console.log(`🛑🛑🛑 getMakes in controller F-ed up ¯\\(◉◡◔)/¯:`, e);
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
    console.log(`🛑🛑🛑 getSpecs in controller F-ed up ¯\\(◉◡◔)/¯:`, e);
    res.sendStatus(500);
  }
};

exports.getEngine = async (req, res) => {
  try {
    //I had a issue with relations in a database and needed to move on , so... the most ugly and easy sollustion I came up with. This needs to fixed.
    const exactModel = await models.Generations.findOne({
      where: {
        id: req.body.id,
      },
    });
    const arr = [];
    const allEngines = await models.Engines.findAll();
    for (let id of exactModel.engines.split(",")) {
      for (let engine of allEngines) {
        if (engine.id === +id) {
          arr.push(engine);
        }
      }
    }
    if (arr === []) {
      console.log("Not found!");
      res.status(404);
      res.send("No data!");
    } else {
      res.status(200);
      res.send(arr);
    }
  } catch (e) {
    console.log(`🛑🛑🛑 getEngine in controller F-ed up ¯\\(◉◡◔)/¯:`, e);
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
    console.log(`🛑🛑🛑 getInfo in controller F-ed up ¯\\(◉◡◔)/¯:`, e);
    res.sendStatus(500);
  }
};

////////////////////////////////
//      PARTS HIREARCHY       //
////////////////////////////////
// 1: "forced_induction"
// 2: "air_filter"
// 3: "fuel_pump"
// 4: "injectors"
// 5: "clutch"
// 6: "exhaust"
// 7: "intake_manifold"
// 8: "brakes"
// 9: "head"
////////////////////////////////

exports.getParts = async (req, res) => {
  try {
    const test = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    };
    await models.Parts.findAll().then((response) =>
      response.map((el) => {
        test[el.partID].push(el);
      })
    );
    res.status = 200;
    res.send(test);
  } catch (e) {
    console.log(`🛑🛑🛑 getParts in controller F-ed up ¯\\(◉◡◔)/¯:`, e);
    res.sendStatus(500);
  }
};
