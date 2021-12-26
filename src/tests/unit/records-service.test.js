const mockingoose = require('mockingoose');

const model = require('../../models/record');
const mongoose = require("mongoose");
const service = require('../../services/records')
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
const PROCESSED_MOCK_DATA = [
    {
        totalCount: MOCK_DATA[0].counts.reduce((a, b) => a + b, 0),
        createdAt: MOCK_DATA[0].createdAt,
        key: MOCK_DATA[0].key,
    },
    {
        totalCount: MOCK_DATA[1].counts.reduce((a, b) => a + b, 0),
        createdAt: MOCK_DATA[1].createdAt,
        key: MOCK_DATA[2].key,
    },
    {
        totalCount: MOCK_DATA[2].counts.reduce((a, b) => a + b, 0),
        createdAt: MOCK_DATA[2].createdAt,
        key: MOCK_DATA[2].key,
    },
]

describe('Test Record model', () => {
    it("Successful empty aggregate return.", () => {
        mockingoose(model).toReturn(PROCESSED_MOCK_DATA, 'aggregate');
        return service.recordsBetweenDateAndCount({
            "startDate": "2016-01-26",
            "endDate": "2030-05-05",
            "minCount": 0,
            "maxCount": 4
        }).then(records => {
            expect(JSON.parse(JSON.stringify(records))).toMatchObject(PROCESSED_MOCK_DATA)
        })
    });
});
