function solve(word, text) {
 return text.toLowerCase()
        .split(' ')
        .some((w)=> w === word.toLowerCase()) 
            ? word : `${word} not found!`;


}

solve('javascript',
'JavaScript is the best programming language'
)

solve('python',
'JavaScript is the best programming language'
)