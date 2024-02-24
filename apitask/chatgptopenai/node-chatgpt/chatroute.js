var express = require("express");
var router = express.Router();
var chatController = require("./chatcontroller");

router.route("/getanswer")
  .get((req, res) => {
    // Handle GET request for /getanswer if needed
    res.status(405).send("GET method not allowed");
  })
  .post((req, res) => {
    console.log("req.body", req.body);
    chatController.getAnswer(req)
      .then(data => res.json(data))
      .catch(err => res.send(err));
  });

module.exports = router;
