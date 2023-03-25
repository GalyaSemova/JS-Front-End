function solve(arr, nElement) {

    let outputArr =[];

for (let i = 0; i < arr.length; i+=nElement) {
  
    outputArr.push(arr[i]);

    
}

return outputArr;

console.log(outputArr.join("\n"));

}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
)

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
)