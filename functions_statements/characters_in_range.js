function charInRange(first, second) {
    const getCharAscii = (char) => char.charCodeAt(0);
    let firstCharAscii = getCharAscii(first);
    let secondCharAscii = getCharAscii(second);

    let minAscii = Math.min(firstCharAscii, secondCharAscii);
    let maxAscii = Math.max(firstCharAscii, secondCharAscii);

    let chars = [];

    for (let index = minAscii + 1; index < maxAscii; index++) {
        chars.push(String.fromCharCode(index));
        
    }


    return chars.join(' ');


}
console.log(charInRange('a',
'd'
))
console.log(charInRange('#',
':'
))
