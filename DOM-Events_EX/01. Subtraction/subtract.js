function subtract() {
    const firstInput = document.getElementById('firstNumber');
    let firstNum = Number(firstInput.value);
    const secondInput = document.getElementById('secondNumber');
    let secondNum = Number(secondInput.value); 
    const result = document.getElementById('result');

    let sum = firstNum - secondNum;
    result.textContent = sum;



   
}