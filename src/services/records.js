const Records = require("../models/record");

const recordsBetweenDateAndCount = (queryFilter) => {
        const pipeline = [
            {
                $match: {
                    createdAt: {$lt: new Date(queryFilter.endDate), $gte: new Date(queryFilter.startDate)},
                }
            },
            {
                $addFields: {
                    totalCount: {
                        $reduce: {
                            input: "$counts",
                            initialValue: 0,
                            in: {
                                $add: ["$$value", "$$this"]
                            }
                        }
                    }
                }
            },
            {
                $match: {
                    totalCount: {$lt: queryFilter.maxCount, $gte: queryFilter.minCount}
                }
            },
            {
                $project:
                    {
                        "_id": 0,
                        "key": 1,
                        "createdAt": 1,
                        "totalCount": 1
                    }
            }
        ]
        return Records.aggregate(pipeline)
};

module.exports = { recordsBetweenDateAndCount };
