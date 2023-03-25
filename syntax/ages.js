function ages(input) {
    let result;
    if(0<=input && input<= 2){
        result = 'baby';

    }else if (3<=input && input<= 13) {
        result = 'child';

    } else if (14<=input && input<= 19) {
        result='teenager';

    } else if (20<=input && input<= 65) {
        result ='adult';

    }else if(input>=66) {
        result ='elder';

    }else {
        result='out of bounds';

    }

    console.log(result);
}

ages(20)
ages(100)
ages(-1)