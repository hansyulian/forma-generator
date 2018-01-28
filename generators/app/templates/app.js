const express = require("express");
const pipelineConfig = require("./config/pipeline");
const app = express();
const appConfig = require("./config/app");
const PORT = appConfig.PORT;

pipelineConfig(app);


app.listen(PORT, function (req, res) {
    console.log("app started");
    console.log(appConfig);
})