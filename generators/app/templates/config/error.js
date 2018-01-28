const config = require("./app");
const forma = require("forma");
var formaUtil = forma.utils;
var jstring = formaUtil.jstring;
var debug = config.DEBUG;
var prettyResponse = config.PRETTY_RESPONSE;

module.exports = function error(err, req, res, next) {
    var stack = err.stack;
    var message = err.message;
    console.error(message);
    console.error(stack);
    res.status(500);
    var responseJSON = {
        message: message
    }
    if (debug)
        responseJSON.stack = stack;
    var responseBody = "";
    if (prettyResponse)
        responseBody = jstring(responseJSON);
    else
        responseBody = JSON.stringify(responseJSON);
    res.send(responseBody);
}