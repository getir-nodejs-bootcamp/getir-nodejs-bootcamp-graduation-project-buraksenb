# Getir Node.js Bootcamp Graduation Project

## The API

This repository is for RESTful API with a single endpoint which is hosted on Heroku and implemented with Node.js using
Express.

Heroku link : https://getir-records-api.herokuapp.com \
You can reach the API docs Heroku Swagger docs link : [Heroku Swagger](https://getir-records-api.herokuapp.com/docs)

## TODOS :

- [x] Complete basic structure
- [x] Complete basic functionality.
- [x] Add exception handling.
- [x] Add logger.
- [x] Add unit and integration tests.
- [x] Add swagger documentation and update README.md .
- [x] Deploy to Heroku.
- [x] Added documentation.

## Requirements

- [Node.js](https://nodejs.org/en/) version **^16.13.0**
- [Express](https://expressjs.com/) version **^4.17.2**
- [Mongoose](https://mongoosejs.com/) version **^6.1.3**
- [Morgan](https://www.npmjs.com/package/morgan) version **^1.10.0**

## Installation

First clone the repository then use the node package manager to install packages.

```bash
git clone https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-buraksenb.git
cd getir-nodejs-bootcamp-graduation-project-buraksenb
npm install
```

## Run

The API can be run locally with development mode or normal mode.

```bash
# Normal node application mode
npm run serve
# Development mode with Nodemon
npm run dev 
```

# Tests

The API has unit and integration tests inside ./src/tests path. The tests can be conducted using Jest with:

```bash
npm run test
```

## Records API

| Method                       | Description                                                     | Required Body Fields
| ---------------------------- | --------------------------------------------------------------- | ------------------------ 
| POST /records                | Returns filtered records                                       |  startDate,endDate,minCount,maxCount                       | **

## Example Requests

### Successful Operation :

Send POST request to https://getir-records-api.herokuapp.com/records.

#### Request body:

```json
{
  "startDate": "2016-12-26",
  "endDate": "2017-03-02",
  "minCount": 100,
  "maxCount": 200
}
```

#### Expected Response:

Response body below with Http Status: OK 200.

```json
{
  "code": 0,
  "msg": "Success",
  "records": [
    {
      "key": "TAKwGc6Jr4i8Z487",
      "createdAt": "2017-01-28T01:22:14.398Z",
      "totalCount": 120
    },
    {
      "key": "kOKMRjkB",
      "createdAt": "2016-12-30T11:56:25.780Z",
      "totalCount": 120
    },
    {
      "key": "LSyjwviN",
      "createdAt": "2016-12-30T01:31:07.831Z",
      "totalCount": 116
    },
    {
      "key": "JuFWNLyO",
      "createdAt": "2016-12-26T18:26:11.183Z",
      "totalCount": 102
    }
  ]
}
```

### Invalid Body Request :

Send POST request to https://getir-records-api.herokuapp.com/records.

#### Request body:

```json
{
  "startDate": "2016-12-26",
  "endDate": "2017-03-02",
  "minCount": 200,
  "maxCount": 100
}
```

#### Expected Response:

Response body below with Http Status: BAD REQUEST 400.

```json
{
  "error": {
    "message": "\"minCount\" must be less than ref:maxCount"
  }
}
```

### Invalid Method Request :

Send GET request to https://getir-records-api.herokuapp.com/records with empty body.

#### Expected Response:

Response body below with Http Status: NOT FOUND 404.

```json
{
  "error": {
    "message": "Requested resource has not been found"
  }
}
```

