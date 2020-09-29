const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let str = '';
    arr = expr.match(/.{1,10}/g);
    
    const copy = arr.map((item, idx) => {
      return item.replaceAll(/00/g, '').replaceAll(/10/g, '.').replaceAll(/11/g, '-').replaceAll('**********', ' ')
    })
    
    copy.forEach((item, idx) => {
      if(item === ' '){
        str += item;
      }
      for(let key in MORSE_TABLE){
        if(key === item){
          str += MORSE_TABLE[key];
        }
      }
    }); 

    return str;
}

module.exports = {
    decode
}