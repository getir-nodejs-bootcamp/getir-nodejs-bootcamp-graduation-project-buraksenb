const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        counts: [
            {
                type: Number,
            },
        ],
        createdAt: {
            type: Date,
            required: true,
        },
    },
);

module.exports = mongoose.model("Record", schema);


