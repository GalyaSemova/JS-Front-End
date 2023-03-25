function isPerfectNumber(number) {
    let divisors = [];

    for (let currentNum = 1; currentNum <= number / 2; currentNum++) {
        if(number % currentNum === 0) {
            divisors.push(currentNum);
        }    
        
    }



    let divisorsSum = divisors.reduce((currentValue, previuosValue) => {
        return currentValue + previuosValue;

    }, 0);

    // let divisorsSum = divisors.reduce((currentValue, previuosValue) => currentValue + previuosValue, 0);


    if(number===divisorsSum) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }





}

isPerfectNumber(1236498)
isPerfectNumber(28)
isPerfectNumber(6)