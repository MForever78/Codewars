# Report

## Programming Details

- Instead of using `regexpObj.test()`, you can also use `str.match()`, `str.slice(-1)`, `str.lastIndexOf('_')` etc.

## Best Practice

I think my implement is quite good. But here's the voted best.

```js
function searchNames( logins ){
  return logins.filter(function (login) { return login[0].slice(-1) === '_' });
}
```

