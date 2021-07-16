
exports.min = function min (array) {
  if (!array)
    return 0;
  if (array.length == 0)
    return 0;
  let min = array[0];
  array.map(el => min = el < min ? el : min);
  return min;
}

exports.max = function max (array) {
  if (!array)
    return 0;
  if (array.length == 0)
    return 0;
  let max = array[0];
  array.map(el => max = el > max ? el : max);
  return max;
}

exports.avg = function avg (array) {
  if (!array)
    return 0;
  if (array.length == 0)
    return 0;
  let sum = array.reduce((s, el) => s + el);
  return sum / array.length;
}
