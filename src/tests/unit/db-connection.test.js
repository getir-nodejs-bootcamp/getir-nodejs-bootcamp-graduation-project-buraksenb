const {connectDB} = require('../../loaders/mongodb')
const mongoose = require("mongoose");
const envPath = __dirname + "/../../.env";
require("dotenv").config({path: envPath});
jest.setTimeout(20000)

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Test database connection.', () => {
    it("Successful connection to database", () => {
        connectDB()
    });
});
