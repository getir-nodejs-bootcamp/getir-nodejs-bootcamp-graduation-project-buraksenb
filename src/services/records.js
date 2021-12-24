const Records = require("../models/record");

const recordsBetweenDateAndCount = (queryFilter) => {
    return new Promise((resolve,reject) => {
        const pipeline = [
            {
                $match: {
                    createdAt: {$lt: new Date(queryFilter.endDate), $gte: new Date(queryFilter.startDate)},
                },
                $addFields: {
                    totalCount : {
                        $reduce: {
                            input: "$counts",
                            initialValue : 0,
                            in : {
                                $add : ["$$value","$$this"]
                            }
                        }
                    }
                },
                $match : {
                    totalCount : {$lt : queryFilter.maxCount, $gte: queryFilter.minCount}
                },
                $project :{
                    "_id" : 0,
                    "counts" : 0,
                    "value" : 0,
                    "key" : 1,
                    "createdAt" : 1,
                    "totalCount" : 1
                }
            }
        ]
        const records = Records.aggregate(pipeline)
        resolve(records)
    });
};

module.exports = { recordsBetweenDateAndCount };
