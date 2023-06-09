function solve(numAsString, ...operations) {
    let number = Number(numAsString);
    

    for (const operation of operations) {
        switch(operation) {
            case 'chop':
                number/=2;
                break;
            case 'dice' :
                number = Math.sqrt(number);
                break;
            case 'spice':
                number+=1;
                break;
            case 'bake' :
                number*=3;
                break;
            case 'fillet':
                number*=0.8;
                break;         
        }

        console.log(number);
        
    }





}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')


// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number
