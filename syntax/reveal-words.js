function solve(words, text){

    let wordsArr = words.split(", ");

    for (const word of wordsArr) {

        // while(text.includes('*'.repeat(word.length))) {
        //     text = text.replace('*'.repeat(word.length), word);
        // }  
        
        text = text.replace('*'.repeat(word.length), word);
    }

    console.log(text);




}

solve('great',
'softuni is ***** place for learning new programming languages'
)

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)

