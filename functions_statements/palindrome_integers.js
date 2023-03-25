function palindrome(numbers) {
    numbers
        .forEach((num) => {

            console.log(isPalindrome(num)
                         ? `true`
                         : `false`);

        
        });

 function isPalindrome(num) {
    let reverse = Number([...num.toString()]
                      .reverse()
                      .join(''));

    return num===reverse;                  
 }       
}

palindrome([123,323,421,121])
palindrome([32,2,232,1010])