function getClosedToZero(...arr){
    let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
           if (Math.abs(min) > Math.abs(arr[i])){
               min = arr[i];
           }   
        }
        return min;
}
