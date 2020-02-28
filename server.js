const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const fs = require('fs');
const path = require('path');
const Store = require('./models/store');
const router = require('./routes');


// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

// [CONFIGURE SERVER PORT]
var port = 8888;
// app.engine('html', require('ejs').renderFile);
// app.use(express.static(path.join(__dirname + '/index_style.css')));
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/'));
    // res.sendFile(path.join(__dirname + '/YUMMY'));

})

// [CONFIGURE ROUTER]
router(app, Store)

var db = mongoose.connection;
db.on('error', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server error");
    console.error
});
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost:27017/storeDB', {useNewUrlParser: true, useUnifiedTopology: true});



// [RUN SERVER]
app.listen(port, function(){
    console.log("Express server has started on port " + port)
});

