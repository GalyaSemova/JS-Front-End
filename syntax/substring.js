function solve(input, startIndex, count) {

let result=[];
for(let i = startIndex; i<startIndex + count; i++) {
    result.push(input[i])
}
// input.substr(startIndex, count);
console.log(result.join(""))
}

solve('ASentence', 1, 8)
solve('SkipWord', 4, 7)