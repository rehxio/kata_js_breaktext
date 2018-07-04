const { validateText } = require("../src")
//'hola', 8 = 'hola'
//'hola', 2 = 'ho\nla'
//'hola mundo', 7 = 'hola\nmundo'

describe('Recibe un texto y las columnas', () => {
   test('Devuelve el texto sin partir', () => {
      expect(validateText('Hola',8)).toBe('Hola')
   })
   
   test('Divide el texto en el numero de columnas indicado', () => {
      expect(validateText('Hola',2)).toBe('Ho\nla')
   })
   
   test('Divide el texto por palabras', () => {
      expect(validateText('hola mundo',7)).toBe('hola\nmundo')
   })
}) 
