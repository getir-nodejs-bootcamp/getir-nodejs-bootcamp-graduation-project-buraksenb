const mockingoose = require('mockingoose');

const model = require('../../models/record');
const mongoose = require("mongoose");

const MOCK_DATA = [
    {
        _id: new mongoose.Types.ObjectId(),
        counts: [1, 2, 3],
        createdAt: Date.now(),
        key: "LorenIpsum 1",
        value: "1",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        counts: [4, 5, 6],
        createdAt: Date.now(),
        key: "LorenIpsum 2",
        value: "2",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        counts: [7, 8, 9],
        createdAt: Date.now(),
        key: "Loren Ipsum 3",
        value: "3",
    },
]

describe('Test Record model', () => {
    it("Successful empty aggregate return.", () => {
        mockingoose(model).toReturn(MOCK_DATA, 'aggregate');
        return model.aggregate([]).then(records => {
            expect(JSON.parse(JSON.stringify(records))).toMatchObject(MOCK_DATA)
        })
    });
});
