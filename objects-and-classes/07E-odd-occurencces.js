function oddOccurences(input) {
    let arr = input.split(' ');//input.split(" ").map(el => el.toLowerCase());
    let objArr = {};

    for (const item of arr) {
        let word = item.toLowerCase();
        if (!objArr.hasOwnProperty(word)) {
            objArr[word] = 1;
        } else {
            objArr[word]++;
        }    
    }

   
    objArr = Object.entries(objArr)
        .filter(([word, value]) => {
            if (value % 2 !== 0) {
                return word;
            }
        })
        .map(el => el[0]);

console.log(objArr.join(" "));

}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
//c# php 1 5

oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')
//soft food




// function solve(input) {
//     let words = input.split(" ").map(el => el.toLowerCase());
//     let collection = {};

//     collection = words.reduce((acc, cur, i) => {
//         if (!acc.hasOwnProperty(cur)) {
//             acc[cur] = 1;
//         } else {
//             acc[cur]++;
//         }

//         return acc;
//     }, {});

//     collection = Object.entries(collection)
//         .filter(([word, value]) => {
//             if (value % 2 !== 0) {
//                 return word;
//             }
//         })
//         .map(el => el[0]);

//     console.log(collection.join(" "));
// }