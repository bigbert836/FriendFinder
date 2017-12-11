var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  
  app.post("/api/friends", function(req, res) {
  
  //Fuctions to find total
  function getSum(total, num) {
    return total + num;
  }

  var score = req.body.scores;
  var match;
  var matchScore = 0;

  for(var i = 0; i < friends.length; i++){
    matchScore = friends[i].scores.reduce(getSum);
    //match = score - matchScore;
  }

  res.json(matchScore);

   friends.push(req.body);
  });

};
    