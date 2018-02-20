function cypherPhrase(arr, str) {
  str = str.split("");

  let newStr = getTransformedArray(str, function(el) {
    for (let key in arr) {
      if (el === key) {
        return arr[key];
      }
    }
    return el;
  });
  newStr = newStr.join("");
  return newStr;
}