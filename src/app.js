const express = require("express")
const helmet = require("helmet")
const loaders = require("./loaders");
const config = require("./config");
const recordRoutes = require("./routes")
const NotFoundError = require("./errors/not-found");
const errorHandler = require("./middlewares/error-handler");

const app = express();
config();
loaders();

app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on ${process.env.APP_PORT} port.`)
    app.use("/records",recordRoutes );

    app.use((req, res, next) => {
        const error = new NotFoundError()
        next(error);
    });
    app.use(errorHandler);
});
