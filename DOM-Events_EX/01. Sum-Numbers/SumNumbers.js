function calc() {
    let numOneInput = document.getElementById('num1');
    let numTwoInput = document.getElementById('num2');
    let sumInput = document.getElementById('sum');
    
    let firstNum = Number(numOneInput.value);
    let secondNum = Number(numTwoInput.value);
    let sum = firstNum + secondNum;

    sumInput.value = sum;


    
}
