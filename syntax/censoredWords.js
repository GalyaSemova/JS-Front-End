function solve(text, word) {
    while(text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }

    console.log(text)

}

solve('A small sentence with some words', 'small')


// 16.	Count String Occurrences
function solve(text, occurance) {
    let words= text.split(' ');
    let count= 0;
for (let word of words) {
    if (occurance===word){
        count++;
    }
    
}
    

    console.log(count);

}

solve('This is a word and it also is a sentence',
'is'
)