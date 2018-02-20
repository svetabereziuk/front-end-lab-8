function collectIds(arr) {
  let filter = getFilteredArray(arr, function(el) {
    return el.rating > 3;
  });
  
  return getTransformedArray(filter, function(el) {
    return el.id;
  });
}

