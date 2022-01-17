const router = require("express").Router();
const controller = require("./controller/controller");
const bp = require("body-parser");
router.use(bp.json());
// router.use(bp.urlencoded({ extended: true }));

router.get("/", (req, res) => res.send("<h1>Heya boss ´◕ ◡ ◕｀</h1>"));
router.get("/getMakes", controller.getMakes);
router.post("/getModels", controller.getModels);
router.post("/getGens", controller.getGenerations);
router.post("/getEngine", controller.getEngine);
router.post("/getInfo", controller.getInfo);
router.get("/getParts", controller.getParts);

module.exports = router;
