const request = require("supertest");
const app = require("../../app");
const mongoose = require("mongoose");
jest.setTimeout(10000)
const envPath = __dirname + "/../../.env";
require("dotenv").config({path: envPath});


afterAll(async () => {
    await mongoose.connection.close();
    app.close()
});


describe("Test overall application.", () => {
    it("Successful filtering of records.", async () => {
        const body = {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        }
        const response = await request(app)
            .post('/records')
            .send(body)
        expectSuccessful(response)

    })
    it("Invalid request body.", async () => {
        const body = {
            "dummy": "dummy"
        }
        const response = await request(app)
            .post('/records')
            .send(body)
        expectError(response, 400)


    })
    it("Min count is larger than max count request body.", async () => {
        const body = {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 3200,
            "maxCount": 3000
        }
        const response = await request(app)
            .post('/records')
            .send(body)
        expectError(response, 400)


    })
    it("Method other than POST request.", async () => {
        const response = await request(app)
            .get('/records')

        expectError(response, 404)
    })
})


const expectError = (response, status) => {
    expect(response.status).toEqual(status)
    expect(response.body).toHaveProperty('error')
    expect(response.body).not.toHaveProperty('code')
    expect(response.body).not.toHaveProperty('msg')
    expect(response.body).not.toHaveProperty('records')
}
const expectSuccessful = (response) => {
    expect(response.status).toEqual(200)
    expect(response.body).toHaveProperty('code')
    expect(response.body).toHaveProperty('msg')
    expect(response.body).toHaveProperty('records')
}
