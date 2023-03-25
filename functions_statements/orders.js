function order(product, quantity) {
//     // •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00

let totalOrder = price(product) * quantity;

console.log(totalOrder.toFixed(2));

function price(product){
    let result=0;

    switch(product) {
        case "coffee":
            result = 1.50;
            break;
        case "water":
            result = "1.00";
            break;
        case "coke":
            result= "1.40";
            break;
        case "snacks" :
            result =2.00;
            break;   
    }
    return result;
}

}

order("water", 5)
order("coffee", 2)