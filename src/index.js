export const validateText = (text,columNumbers) => {
   if(text.length <= columNumbers) {
      return text;
   } else {
      let words = text.split(' ');
      let result = '';
      if (words.length > 1) {
         words.forEach(word => {
            result += word + addBreakline(words, word);
         });
         return result;
      } else {
         return words[0].substring(0,columNumbers) + '\n' + 
                words[0].substring(columNumbers, words[0].length)
      }
   }
}

const addBreakline = (words, word) => {
   return (word !== words[words.length - 1]) ? '\n' : '';
}