function maxarr(arr) {
    let maxnumber = 0
 
    for(let i = 0; i < arr.length; i++) {
     if (arr[i] > maxnumber) {
         maxnumber= arr[i]
 
     }
 
    }
    console.log(maxnumber)
 }
 maxarr([6,3,10,1,5,0]);