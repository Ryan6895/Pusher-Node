var Pusher = require('pusher');
const express = require('express');
const path = require('path');
const bodayParser = require('body-parser');
const cors = require('cors');

const app = express();

const poll = require('./routes/poll')

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodayParser.json());
app.use(bodayParser.urlencoded({extended: false}));

//enable cors
app.use(cors());

app.use('/poll', poll);

//start server
const port = 2300;
app.listen(port, function() {
console.log(`listen to ${port}`);
})
