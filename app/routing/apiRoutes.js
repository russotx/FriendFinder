"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const friends = require('../data/friends');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: false
}));

router.get('/api/friends', function(req,res){
  res.json();
});

router.post('/api/friends', function(req,res){
  let profile = req.body;
  let topFriend = friends[findFriend(friends,profile)];
  console.log(topFriend);
  console.log('friends array: ');
  console.log(friends);
  friends.push(profile);
  console.log(profile);
});

function findFriend(friendsArray,obj){
  // create an array of total differences for each friend
  let buddy = 10000;
  let diffs = friendsArray.map(function(friend,index){
    let totalDiff = 0;
    // traverse a friend array of scores
    friend.scores.forEach(function(score,index){
      // get the difference between the scores and add it to totalDiff
      totalDiff += Math.abs(parseInt(score)-parseInt(obj.scores[index]));
    });
    if (totalDiff < buddy) {
      buddy = totalDiff;
      return totalDiff;
    } else return '';
  });
  console.log(diffs);
  return diffs.indexOf(buddy);
}

module.exports = router;
