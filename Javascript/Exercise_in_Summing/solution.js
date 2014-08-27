function minimumSum(values, n) {
  // sum the n smallest integers in the array values (not necessarily ordered)
  if (!values) return 0;
  var sum = 0;
  values = values.sort(function(a, b) { return a - b; });
  var len = Math.min(n, values.length);
  for (var i = 0; i < len; ++i) { sum += values[i]; }
  return sum;
}

function maximumSum(values, n) {
  // sum the n largest integers in the array values (not necessarily ordered)
  if (!values) return 0;
  var sum = 0;
  values = values.sort(function(a, b) { return b - a; });
  var len = Math.min(n, values.length);
  for (var i = 0; i < len; ++i) { sum += values[i]; }
  return sum;
}
