// Strings

let myName = 'Daniel'
let greeting = 'Hola, ' + myName + '!'
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf('Hola'))
console.log(greeting.includes('Hola'))
console.log(greeting.includes('Paco'))
console.log(greeting.slice(0, 10))
console.log(greeting.replace('Daniel', 'Africa'))

// Template literals (plantillas literales)
let message = `Hola, este es mi curso
de JavaScript`

console.log(message)

let email = 'daniqb99@icloud.com'
console.log(`Hola, ${myName}! Tu email es: ${email}`)
