function solve(input) {
    let sum = 0;
    let inputArr = Array.from(String(input), Number);
    let equal= true;
    

    for(let i=0; i<inputArr.length-1; i++){
        if(inputArr[i]!==inputArr[i+1]) {
            equal = false;    
        }
        sum+=inputArr[i];
    }

    if(equal == true) {
        console.log(`true`);
    } else if (equal == false){
        console.log(`false`);

    }

    console.log(sum + inputArr[inputArr.length-1]);


}

solve(2222222)
solve(1234)