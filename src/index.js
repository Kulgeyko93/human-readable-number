module.exports = function toReadable (number) {
  let dictionary = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
   }
 
   let result = '';
 
   let hungreds = Math.trunc((number/100));
   let tens = Math.trunc(((number - hungreds*100)/10));
   let unites = number - hungreds*100 - tens*10;


   if (hungreds !== 0) {
    result += dictionary[hungreds] + ' hundred'
    
    if (unites === 0 && tens === 0) {
      return result
    }
  }

  if (tens !== 0 && tens > 1 ) {
    if (unites === 0 ) {
      result += ' '+ dictionary[tens*10] ;
      return result.trim();
    }
    result += ' '+ dictionary[tens*10] + ' ' + dictionary[unites]
   return result.trim();
 } else 
   if (tens === 1) {
     if (unites === 0) {
      result += ' ' +  dictionary[tens*10 + unites] ;
      return result.trim();
     }
     result += ' ' +  dictionary[tens*10 + unites];
     return result.trim()

   } else if ( tens === 0) {
    result+= ' ' + dictionary[unites]
     return result.trim()
 }


}