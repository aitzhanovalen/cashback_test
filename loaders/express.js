const express = require('express')
const cors = require('cors');
const bodyParser = require("body-parser");
const router = require("../routes/index")


module.exports = async (app)=> {
    app.get('/', (req, res) => {
        res.send('Hello, everyone in World!')
    });

    app.use(cors());

    app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
    });


    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(bodyParser.json({ limit: "50mb", extended: true }));
    app.use(
        bodyParser.urlencoded({
            limit: "50mb",
            extended: true,
            parameterLimit: 1000000
        })
    );

    app.use("/", router);

    return app
}


