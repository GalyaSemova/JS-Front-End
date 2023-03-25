function solve(number) {
    let numAString = number.toString();
    let sum = 0;
    for (const digitAsString of numAString){
        let digit = Number(digitAsString);
        sum+=digit;
        
    }
    console.log(sum);

}

solve(245678)
solve(97561)
solve(543)