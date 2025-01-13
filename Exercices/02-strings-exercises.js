// 1. Concatena dos cadenas de texto.
let string1 = 'Hola, '
let string2 = 'Daniel'
console.log(string1 + string2)

// 2. Muestra la longitud de una cadena de texto.
myString = 'Daniel Quiros'
console.log(myString.length)

// 3. Muestra el primer y último carácter de un string.
console.log(myString[0])
console.log(myString[myString.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string.
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())

// 5. Crea una cadena de texto en varias líneas.
let multilineSting = `Esta
es mi cadena
multilinea`
console.log(multilineSting)

// 6. Interpola el valor de una variable en un string.
let car = 'BMW'
console.log(`Yo conduzco un ${car}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
let stringWithSpaces = 'Mi nombre es Daniel Quiros'
console.log(stringWithSpaces.replaces(/ /g, '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(multilineSting.includes('multilinea'))
// 9. Comprueba si dos strings son iguales.
let string3 = 'Hola'
let string4 = "Hola"
console.log(string3 === string4)

// 10. Comprueba si dos strings tienen la misma longitud.
console.log(string3.length === string4.length)