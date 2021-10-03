const express = require('express');
const {getInts, mean, median, mode} = require('./functions.js');
const ExpressError = require('./expressError');


const app = express();
app.use(express.json());

app.get('/mean', (req, res, next) =>{
    if (!req.query.nums) {
        throw new ExpressError('You must pass a in a list of comma separated nums.', 400)
      };
    let nums = getInts(req.query.nums);
    let result = {
        operation: "mean",
        result: mean(nums)
    };
    return res.send(result);
});

app.get('/median', (req, res, next) =>{
    if (!req.query.nums) {
        throw new ExpressError('You must pass a in a list of comma separated nums.', 400)
      };
    let nums = getInts(req.query.nums);
    let result = {
        operation: "median",
        result: median(nums)
    };
    return res.send(result);
});

app.get('/mode', (req, res, next) =>{
    if (!req.query.nums) {
        throw new ExpressError('You must pass a in a list of comma separated nums.', 400)
      };
    let nums = getInts(req.query.nums);
    let result = {
        operation: "mode",
        result: mode(nums)
    };
    return res.send(result);
});

app.get('/all', (req, res, next) =>{
    if (!req.query.nums) {
        throw new ExpressError('You must pass a in a list of comma separated nums.', 400)
      };
    let nums = getInts(req.query.nums);
    let result = {
        operation: "all",
        mode: mode(nums),
        meadian: median(nums),
        mean: mean(nums),
    };
    return res.send(result);
});

app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
      error: { message, status },
    });
  });

app.listen(3000, () =>{
    console.log('Server running on port 3000')
})