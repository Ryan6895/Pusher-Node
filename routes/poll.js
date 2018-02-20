const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
var config = require("./../config.js")

var pusher = new Pusher(config.pusher);

router.get('/', (req, res )=> {
  res.send('POLL')
});

router.post('/', (req, res) =>{
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });

  return res.json({success: true, message: 'Thank you for voting'})
});

module.exports = router;
