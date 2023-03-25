function solve(text) {

    let wordRe = /($[a-z])|[A-Z][^A-Z]+/g;
	return text.match(wordRe).join(" ");
}

console.log(
    solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
)