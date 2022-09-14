var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");
var User = mongoose.model("User");
var auth = require("../auth");
const { sendEvent } = require("../../lib/event");

// Preload item objects on routes with ':title'
router.param("title", function(req, res, next, title) {
  Item.find({title: {$regex: title, $options: "six"}})
  .populate("seller")
  .then(function(items) {
    if (!items) {
      return res.sendStatus(404);
    }

    req.items = items;

    return next();
  })
  .catch(next)
})

// return a list of items filtered by title
router.get("/:title", auth.optional, function(req, res, next) {
    res.send(req.items)
  });

// Test route
router.get("/", (req, res) => {
    res.send("HELLO")
})

module.exports = router;