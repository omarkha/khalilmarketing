const router = require("express").Router();
const subscriberController = require("../controllers/subscriberController");
const mongoose = require("mongoose");

router.get("/", subscriberController.getSubscribers);
router.get("/:id", subscriberController.getSubscriber);
router.post("/", subscriberController.addSubscriber);
router.delete("/:id", subscriberController.deleteSubscriber);
router.put("/:i", subscriberController.updateSubscriber);

module.exports = router;
