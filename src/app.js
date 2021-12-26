// Required packages.
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

// Project dependencies.
const loaders = require("./loaders");
const config = require("./config");
const recordRoutes = require("./routes")
const NotFoundError = require("./errors/not-found");
const errorHandler = require("./middlewares/error-handler");

const app = express();
config();
loaders();

app.use(helmet())

// Log incoming requests with Morgan. If in production log to console, otherwise log to file.
if (process.env.NODE_ENV === "production")
    app.use(morgan("dev"))
else {
    const accessLogStream = fs.createWriteStream(
        path.join(__dirname, process.env.LOG_PATH, 'access.log'), {flags: 'a'})
    app.use(morgan('combined', {stream: accessLogStream}))
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const server = app.listen(process.env.APP_PORT, () => {
    console.log(`Server is listening on ${process.env.APP_PORT} port.`)
    app.use("/records", recordRoutes);

    // Direct  requests with invalid paths to error handler.
    app.use((req, res, next) => {
        const error = new NotFoundError()
        next(error);
    });
    // Use error handler middleware
    app.use(errorHandler);
});

module.exports = server
