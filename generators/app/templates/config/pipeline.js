const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const middlewareConfig = require("./middlewares");
const routeConfig = require("./routes");
const appConfig = require("./app");
const error = require("./error");
const forma = require("forma");

const formaExpress = forma.express;
const formaRouter = formaExpress.router;
const formaMiddleware = formaExpress.middleware;

module.exports = function configure(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cookieParser());

    formaMiddleware(app, middlewareConfig);
    formaRouter(app, routeConfig);

    app.use(error);
}