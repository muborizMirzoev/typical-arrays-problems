
exports.min = function min (array = []) {
  if (array.length === 0 || !Array.isArray(array)) return 0
  return Math.min(...array)
}

exports.max = function max (array = []) {
  if (array.length === 0 || !Array.isArray(array)) return 0
  return Math.max(...array)
}

exports.avg = function avg (array = []) {
  if (array.length === 0 || !Array.isArray(array)) return 0
  return array.reduce((acc, curr) => acc + curr)/array.length;
}
