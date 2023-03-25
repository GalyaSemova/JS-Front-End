function solve(start, end) {
    let arr = [];
    let sum =0;
    for(let i=start; i<=end; i++) {
        arr.push(i);
        sum = sum+i;
    }

    console.log(arr.join(" "));
    console.log(`Sum: ${sum}`);
    


}

solve(5, 10)
solve(0, 26)