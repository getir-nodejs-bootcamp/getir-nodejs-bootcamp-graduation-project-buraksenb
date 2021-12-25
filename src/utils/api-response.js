
const successfulApiResponse = (data) =>
{
    return ({
        code : 0,
        msg : "Success",
        ...data
    })
}
module.exports = {successfulApiResponse}
