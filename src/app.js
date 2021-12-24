const express = require("express")
const loaders = require("./loaders");
const config = require("./config");
const recordRoutes = require("./routes")
const app = express();

config();
loaders();
app.use(express.json());

app.listen(process.env.PORT, () => {
    app.use("/records",recordRoutes );
});
