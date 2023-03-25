function piccolo(input) {
    let carNumber = [];

    for (const line of input) {
        let [command, carNum] = line.split(', ');


        if(command === 'IN' && !carNumber.includes(carNum)) {
            carNumber.push(carNum);
        } else if (command === 'OUT' && carNumber.includes(carNum)) {
            let index = carNumber.indexOf(carNum);
            carNumber.splice(index, 1);
        }
        
    }

    if(carNumber.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let sortedNumbers = carNumber.sort((numberA, numberB) => numberA.localeCompare(numberB))
        .forEach(num => console.log(num));
        
    }

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

// output
// CA2822UU
// CA2844AA
// CA9876HH
// CA9999TT

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)

// output
// Parking Lot is Empty