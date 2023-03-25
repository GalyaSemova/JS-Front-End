function factorialDivision(numOne, numTwo) {

    return (getFactorial(numOne) / getFactorial(numTwo)).toFixed(2);
    function getFactorial(number) {
    if(number === 1) {
        return number;
    }
    return number * getFactorial(number - 1);
}

}

console.log(factorialDivision(5, 2))
console.log(factorialDivision(6, 2))