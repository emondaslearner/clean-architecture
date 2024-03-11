const router = require("express").Router();

const controller = require("../../../adapter/controller");

router.post("/contact", new controller.Contact().contact);
router.post("/subscribe", new controller.Subscribe().subscribe);

module.exports = router;
