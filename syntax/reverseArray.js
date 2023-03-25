function reverse(n, inputArr){
    
    let arr = [];
    

    for(let i=0; i< n; i++) {
        arr.push(inputArr[i]);
       
    }

    let output = [];

    for(let i= arr.length-1;i >=0; i--) {
        output.push(arr.pop());
       
    }





    console.log(output.join(" "));

}

reverse(3, [10, 20, 30, 40, 50])
reverse(4, [-1, 20, 99, 5])