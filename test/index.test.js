const { validateText } = require("../src")
//'hola', 8 = 'hola'
//'hola', 2 = 'ho\nla'
//'hola mundo', 7 = 'hola\nmundo'
//'abc', 1 = 'a\nb\nc'
//'hola', 0 (o negativo) = throw exception

describe('Recibe un texto y las columnas', () => {
   test('Devuelve el texto sin dividir', () => {
      expect(validateText('Hola',8)).toBe('Hola')
   })
   
   test('Divide el texto en el numero de columnas indicado', () => {
      expect(validateText('Hola',2)).toBe('Ho\nla')
   })
   
   test('Divide el texto por palabras', () => {
      expect(validateText('hola mundo',7)).toBe('hola\nmundo')
   })
}) 
