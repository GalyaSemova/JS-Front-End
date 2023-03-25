function solve(fruit, weight, price) {
    // weigth ->g; price ->kg
    // output: `I need ${money} to buy {weight} kilograms {fruit}.`
    let weightKg=weight/1000;

    let money = weightKg * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)