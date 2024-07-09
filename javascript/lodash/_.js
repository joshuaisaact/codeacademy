
const _ = {};

_.clamp = (num, lower, upper) => {
  let lowerClampedValue = Math.max(num, lower);
  let clampedValue = Math.min(upper, lowerClampedValue)
  return clampedValue;
};

_.inRange = (num, start, end) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  if (start > end) {
    let tmp = start;
    start = end;
    end = tmp;
  }
  if (num < start || num >= end) {
    return false;
  } else {
    return true;
  }
};

_.words = (str) => {
  return str.split(' ')
};

_.pad = (str, len) => {
  if (str > len) {
    return str;
  };
  while (len - str.length > 1) {
    str = (' ' + str + ' ')
  };
  if (len - str.length === 1) {
    str += ' '
  }
  return str;
};

_.has = (obj, key) => {
  if (obj[key] === undefined) {
    return false;
  } else {
    return true;
  };
};

_.invert = (obj) => {
  let invObj = {};
  for (key in obj) {
    const originalValue = obj[key];
    invObj[originalValue] = key;
  }
  return invObj;
};

_.findKey = (obj, func) => {
  for (key in obj) {
    if (func(obj.key)) {
      return key;
    } else {
      return undefined;
    }
  }
};

_.drop = (arr, num) => {
  if (num === undefined) {
    return arr.slice(1);
  }
  return arr.slice(num);
};

_.dropWhile = (arr, predicate) => {
  let dropNumber = arr.findIndex((element, index) => {
    return !predicate(element, index, arr);
  });
  return _.drop(arr, dropNumber)
};

_.chunk = (arr, size) => {
  let chunkArr = [];
  if (size === undefined) {
    size = 1;
  }
  while (arr.length > size) {
    chunkArr.push(arr.splice(0, size))
  };
  chunkArr.push(arr);
  return chunkArr;
};

// Do not write or modify code below this line.
module.exports = _;

