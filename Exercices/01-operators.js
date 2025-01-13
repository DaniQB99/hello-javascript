// 1. Crea una variable para cada operacion aritmetica.
let suma = 5 = 10
let resta = 10 - 5
let multiplicacion = 5 * 5
let division = 20 / 2
let modulo = 10 % 3
// 2. Crea una variable para cada tipo de operacion de asignacion, 
// que haga uso de las variables utilizadas para las operaciones aritmeticas.
let num = 20
num += sum 
num -= resta
num *= multiplicacion
num /= division
num %= modulo
// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparacion.
console.log(10 > 3)
console.log(2 < 5)
console.log(9 == '9')
console.log(12 != 5)
console.log(7 === 7)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion.
console.log(10 < 3)
console.log(2 > 5)
console.log(9 === '9')
console.log(12 != 12)
console.log(7 !== 7)
// 5. Utiliza el operador logico and.
console.log(4 > 2 && 14 < 20)
// 6. Utiliza el operador logico or.
console.log(10 > 5 || 8 < 3)
// 7. Combina ambos operadores logicos.
console.log((10 > 3 && 9 < 18) || (4 < 2 && 12 > 7))
// 8. Añade alguna negacion.
console.log(!(16 > 9))
// 9. Utiliza el operador ternario.
let age = 18
let canDrive = (age >= 18) ? 'Puede conducir' : 'No puede conducir'
// 10. Combina operadores aritmeticos, de comparacion y logicas.
console.log(((9 * 2) - 7) > 19 && (15 - 3) === 12)