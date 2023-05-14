const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.home);
router.post("/create", homeController.createTodo);
router.post("/delete", homeController.destroyTodo);

module.exports = router;
