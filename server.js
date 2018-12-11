// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express appcopy
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static( __dirname + '/public/dist/public' ));
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.json();
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});