const EventEmitter = require(`events`);
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(msg) {
    // send an http request
    console.log(msg);

    //raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

//to export this variables to other module
module.exports = Logger; // at the other module we use .log to refer to this export item
// module.exports.endpoint = url;
