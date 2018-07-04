export const validateText = (text,columNumbers) => {
   if(text.length <= columNumbers) {
      return text;
   }
   else {
      return text.substring(0,columNumbers) + '\n' + text.substring(columNumbers, text.length)

   }
}