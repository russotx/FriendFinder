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
  res.json(friends);
});

router.post('/api/friends', function(req,res){
  let profile = req.body;
  let topFriend = findFriend(friends,profile);
  console.log(topFriend);
  console.log('friends array: ');
  console.log(friends);
  // add user to the list of friends
  friends.push(profile);
  res.json(topFriend);
});

function findFriend(friendsArray,obj){
  let buddy = 501; // max score + 1
  // traverse array of friends
  let diffs = friendsArray.map(function(friend,index){
    let totalDiff = 0;
    // traverse array of scores
    friend.scores.forEach(function(score,index){
      // get the difference between the scores and add it to totalDiff
      totalDiff += Math.abs(parseInt(score)-parseInt(obj.scores[index]));
    });
    if (totalDiff < buddy) {
      buddy = totalDiff;
      return totalDiff;
    } else return '';
  });
  // get best matched friend from index of lowest score diff
  return friendsArray[diffs.indexOf(buddy)];
}

module.exports = router;
