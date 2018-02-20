function fun(el) {
  return el + 1;
}

function getTransformedArray(arr, fun) {
  let newArr = [];  
	  arr.forEach(function(arr) {
	    newArr.push(fun(arr));
	  });
  return newArr;
}
