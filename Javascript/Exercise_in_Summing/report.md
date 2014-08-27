# Report

## Programming Details

- When using `Arr.prototype.sort()` function without specifying the compare function,the array is sorted according to each character's **Unicode code point** value, according to the **string conversion** of each element. So you **cannot** sort negative value by `Arr.sort()`. You must specify the compare function.
- The best way to find the sum of an array is to use `Arr.prototype.reduce(callback(previousValue, currentValue, index, array))`.
- Don't repeat yourself.

## Best practice

```js
function minimumSum(values, n) {
  return add(values.sort(sort), n);   
}

function maximumSum(values, n) {
  return add(values.sort(sort).reverse(), n);  
}

function add (values, n){
  return values.slice(0, n).reduce(function(prev, curr){
    return prev + curr;
  }, 0);  
}

function sort(a, b) {
  return a-b;
}
```
