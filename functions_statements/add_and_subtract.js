function calculations(firstNUm, secondNUm, thirdNum) {
    const sum = (a,b) => a + b;
    const subtract = (mySum , c) => mySum - c;

    return subtract(sum(firstNUm, secondNUm), thirdNum);
}


console.log(calculations(23,
    6,
    10
    ))

    console.log(calculations(42,
        58,
        100
        
        ))
    
    
