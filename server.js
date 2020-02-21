var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var path = require('path');
// [CONFIGURE ROUTER]
// require('./routes')(app)

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

app.post('/created', function(req,res) {

})

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

mongoose.connect('mongodb://localhost:27017');

// //404 error
// function send404Message(response) {
//     response.writeHead(404, { "Content-Type": "text/plain" }); // 단순한 글자 출력 
//     response.write("404 ERROR... "); response.end();
// }

// //200
// function onRequest(request, response) {
//     if (request.method == 'GET' && request.url == '/') {
//         response.writeHead(200, { "Content-Type": "text/html;charset=utf-8';" }); // 웹페이지 출력 
//         fs.createReadStream("./index.html").pipe(response); // 같은 디렉토리에 있는 index.html를 response 함 
//     } else { // file이 존재 하지않을때, 
//         send404Message(response);
//     }

//     if (request.method == 'POST' && request.url == '/create') {
//         // request
//         createDB(body)
//     } else { // file이 존재 하지않을때, 
//         send404Message(response);
//     }
// }

// function createDB() {
//     ///db save
// }

// [RUN SERVER]
app.listen(port, function(){
    console.log("Express server has started on port " + port)
});

