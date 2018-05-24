var userData = require("../data/friends");
var express = require("express")
var router = express.Router()



  router.get("/api/friends", function(req, res) {
    res.json(userData);
    console.log(res.json(userData))
  });

  

  
  

module.exports = router



