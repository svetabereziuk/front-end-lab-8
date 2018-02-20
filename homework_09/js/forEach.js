function forEach(arr, fun){
    for (let i = 0; i < arr.length; i++) {
         fun(arr[i]); 
    }
 }
 function fun(el){
    console.log(el);
 }
  