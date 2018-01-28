module.exports = [

];

function middleware(nameOrUrl, name) {
    var url = name ? nameOrUrl : "/";
    var name = name || nameOrUrl;
    return {
        route: url,
        handler: require("../middlewares/" + name)
    }
}