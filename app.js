// node doesnt execute the code directly, it exceute the whole module inside a function
// this is the module wrapper function
// (function (exports, require, module, __filename, __dirname) {
//  ........
//  })

/*
var logger = require(`./logger`); // need this require to import a module
logger.log(`message`);
*/

const path = require(`path`);
const pathObj = path.parse(__dirname);
console.log(pathObj);
console.log("------------------------------");
const os = require(`os`);
var totMen = os.totalmem();
var freeMem = os.freemem();
console.log(totMen);
console.log(freeMem);
console.log("------------------------------");
const fs = require(`fs`);
/* const syncdirreader = fs.readdirSync(`./`);
console.log(dirreader); */
const dirreader = fs.readdir(`./`, function(err, files) {
  if (err) console.log(`Error`, err);
  else console.log(`results`, files);
});
console.log(dirreader);
console.log("------------------------------");
const EventEmitter = require(`events`); // this caps at the beginning indicate that it is a class, it is a container that store methods and properties
const emitter = new EventEmitter(); // this is an Object of the EventEmitter, like John is an instance of Human

// Raise an event
// emitter.emit("messageLogged", { id: 1, url: "http://" }); // making noise or a notification
const Logger = require(`./logger`);
const logger = new Logger();
// Register a listener
logger.on("messageLogged", function(arg) {
  // emitter.on("messageLogged", (arg) => {
  console.log("Listerner called", arg);
});
logger.log("message");

// we can creat a netwrokign appication by making a web end server that listens to http request on a given port
// so we create a back end service for our client application using like angular or react or moible application on mobile
// using http npm
const http = require(`http`);
const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.write("helloworld");
    res.end(); // needs to end or else this wont work!
  }

  if (req.url === "/api/course") {
    //this works beautifully, just type in http://localhost:3000/api/course in the browser
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
}); // this is actually an evetn emitter
// server.emit
// it is a calss inhertir from net.server, which is an evetn emitter,
// we will later on use express to route these requests

// below is a low level
/* server.on("connection", socket => {
  console.log("new connection");
}); */
// us the above at const server ....

server.listen(3000);
console.log("listening to port 3000");
