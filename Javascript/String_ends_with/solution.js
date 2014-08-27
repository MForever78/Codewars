function solution(str, ending){
  // TODO: complete
  if (ending.length > str.length) return false;
  return str.lastIndexOf(ending) + ending.length === str.length;
}
