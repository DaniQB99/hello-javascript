// Operadores

// Operadores aritmeticos
let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion 
console.log(a / b) // Division

console.log(a % b) // Modulo
console.log(a ** b) // Exoponencial

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)

myVariable += 2 // myVariable + 2
console.log(myVariable)

myVariable += 2
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparacion
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // Igualdad por valor
console.log(a == '6') // Igualdad por valor
console.log(a == a)
console.log(a === a) // Igualdad por identidad (tipo y valor)
console.log(a === 6)
console.log(a === '6')
console.log(a != b)
console.log(a !== '6')

console.log(0 == false) // True 
console.log(1 == false) // False
console.log(2 == false) // alse

console.log(0 == '') // True

console.log(undefined == null) // True
console.log(undefined === null) // False

/*
Truthy values (valores verdaderos)
    - Todos los numeros positivos y negativos menos el 0
    - Todas las cadenas de texto menos las vacias
    - El boolean true

Flasy values (valores falsos)
    - 0
    - 0n
    - null
    - undefined
    - NaN
    - El boolean false
    - Cadenas de texto vacias
*/


// Operadores logicos

// AND (&&)
console.log(5 > 10 && 10 > 20)
console.log(5 < 10 && 10 < 20)
console.log(5 > 4 && 10 < 15)

// OR (||)
console.log(5 > 10 || 10 > 20)
console.log(5 < 10 || 10 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 10 < 15 || 30 > 50)

// NOT (!)
console.log(!(5 > 10 && 15 > 20))
console.llog(!(5 > 10 || 15 > 20))

// Operadores ternarios
const isRaining = true

isRaining ? console.log('Esta lloviendo') : console.log('No esta lloviendo')
