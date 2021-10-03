const ExpressError = require('./expressError');

function getInts(nums) {
    if (!nums) {
      throw new ExpressError("Numbers are required", 400);
    }
    let arr = nums.split(",");
    arr.forEach((num, index, arr) => {
      if (parseInt(num)) {
        arr[index] = parseInt(num);
      } else {
        throw new ExpressError(`${num} is not a number`, 400);
      }
    });
    return arr;
  }
 
// console.log(getInts("1,2,3,4"))

function mean(nums){
    return nums.reduce((acc,curr) => {
        return acc + curr
    }) / nums.length;
}

// console.log(median([1,2,3,4,5,10]))

function median(nums){
  nums.sort((a,b) =>{
        return a-b
    });
    let middle = Math.floor(nums.length/2);
    let median;
    if (nums.length % 2 === 0){
        median = (nums[middle] + nums[middle -1]) / 2;
    } else{
        median = nums[middle]
    }
    return median  
}

function mode(nums){
    let modes = [],
    count = {
        num :0
    },
    i,
    number,
    maxIndex = 0;

  for (i = 0; i < nums.length; i ++) {
    number = nums[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

//   return modes;
  return modes
}

// console.log(mod([1,2,3,4,4,5,5,5,10]))

module.exports = {
    getInts,
    mean,
    median,
    mode,
  };