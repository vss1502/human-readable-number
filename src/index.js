module.exports = function toReadable (number) {
    nnumber = String(number);
    let str = '';

    let q = {
        0: 'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine'
        
    }
    let e = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen' 
    }

    let w = {
        1:'ten',
        2:'twenty',
        3:'thirty',
        4:'forty',
        5:'fifty',
        6:'sixty',
        7:'seventy',
        8:'eighty',
        9:'ninety',

    }

    if(nnumber.length == 3) {
        str = `${q[nnumber[0]]} hundred`;
        if (nnumber[1] == 0 && nnumber[2] == 0) {
            return str;
        }
        if(nnumber[1] == 1) {
            str = str + ` ${e[nnumber[2]]}`;
        } else if (nnumber[1] == 0) {
            str = str + ` ${q[nnumber[2]]}`;
        } else if (nnumber[2] == 0){
            str = str + ` ${w[nnumber[1]]}`;
        } else{
            str = str + ` ${w[nnumber[1]]} ${q[nnumber[2]]}`;
        } 
        return str;
    }


    if(nnumber.length == 2) {
        if (nnumber[1] == 0) {
            str = `${w[nnumber[0]]}`;
        } else if (nnumber[0] == 1){
            str = `${e[nnumber[1]]}`;
        } else {
            str = `${w[nnumber[0]]} ${q[nnumber[1]]}`;
        }
        return str;
    }

    if(nnumber.length == 1) {
        str = `${q[nnumber[0]]}`;
        return str;
    }

   

        
  
}


