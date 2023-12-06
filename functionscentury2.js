function addition(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++){
     sum += i   

    }
        if (sum>= 100) {
            console.log("It's a century", sum);
        
        } else {
            console.log(sum);

}
}
addition(100);