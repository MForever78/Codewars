# Report

## Programming Details

- Mind the special case `solution('abc', 'abcd')` where `'abc'.lastIndexOf('abcd')` returns `-1`, and `-1` plus `'abcd'.length` is exactly `3`! So test if the length of `ending` is longer than that of `str`.
- The better idea is to use RegExp.

## Best Practice

```js
function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}
```

