function wordsTracker(input) {
    let searchedWords = input.shift().split(' ');
    let words = {};
    for (const word of searchedWords) {
        let count = input.filter((w) => w === word).length;
        

        words[word] = count;
        
    }

    //turn the object into an array and sort

    let sortedWords = Object.entries(words)
       .sort((wordA, wordB) => {
        let[_nameA, countA] = wordA;//variable not used _var
        let[_nameB, countB] = wordB;

        return countB - countA;


       } );

       for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
        
       }

}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )

//     this - 3
// sentence - 2


wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )    

//     the – 3
// is - 1
