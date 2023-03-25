function calculator(firstNum, secondNum, operation) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    switch(operation) {
        case 'add':
            return sum(firstNum, secondNum);
        case 'subtract' :
            return subtract(firstNum, secondNum);
        case 'divide' :
            return divide(firstNum, secondNum);
        case 'multiply' :
            return multiply(firstNum, secondNum);    
              
    }

    // const operationMap = {
    //     add : sum,
    //     subtract: substract,
    //     divide :divide,
    //     multiply: multiply
    // }

    // return operationMap[operation](firstNum, secondNum);

}

console.log(calculator(5,
    5,
    'multiply'
    ))


    console.log(calculator(40,
        8,
        'divide'
        
        ))