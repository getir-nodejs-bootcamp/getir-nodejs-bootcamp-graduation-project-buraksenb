
const successfulApiResponse = (records) =>
{
    return ({
        code : 0,
        message : "Success",
        records : records
    })
}

module.exports = {successfulApiResponse}
