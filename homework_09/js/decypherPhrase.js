function decypherPhrase(arr, str) {
  
  var newArr = Object.keys(arr).reduce(function(obj, key) {
    obj[arr[key]] = key;
    return obj;
  }, {});
  
  return cypherPhrase(newArr, str);
}