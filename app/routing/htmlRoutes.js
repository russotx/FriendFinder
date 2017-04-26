"use strict";

const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/survey',function(req,res){
  res.sendFile(path.join(__dirname,'../public','survey.html'));
});
console.log(__dirname);

router.use(function(req, res, next){
  res.sendFile(path.join(__dirname,'../public','home.html'));
});

module.exports = router;
