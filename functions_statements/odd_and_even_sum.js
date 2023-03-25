function oddAndEvenSum(number) {
    // Odd sum = 9, Even sum = 4 => output
    let myFunc = num => Number(num);
    let intArr = Array.from(String(number), myFunc);
      
    let even=0, odd=0;
     intArr
     .forEach(element => {
        if(element%2===0) {
            even+=element;
        } else {
            odd+=element;
        }
        
     });


     console.log(`Odd sum = ${odd}, Even sum = ${even}`)
     

    


}


oddAndEvenSum(12)
oddAndEvenSum(3495892137259234)