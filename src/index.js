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

  
  arr = arr.map( (item) => {
  if(item === '**********'){
    item = " ";
  }
  
    return item = item.match(/.{1,2}/g).map(item => {
     if(item === '00'){
      return item = '';
    }else if(item === '10'){
      return item = '.';
    }else if(item === '11'){
      return item = '-';
    }else{
      return item = ' ';
    }
   });
   
   
    
  } )
  
  let copy =  [...arr];
  
copy.map(item => {
  	item = item.join('');
    if(item === ' '){
      str += item;
    }
    for(let key in MORSE_TABLE){
      if(key === item){
        str += MORSE_TABLE[key];
      }
    }
  })


  return str;
}

module.exports = {
    decode
}