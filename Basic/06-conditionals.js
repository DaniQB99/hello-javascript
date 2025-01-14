// Conditionals

// if, else if, else

// if (si)

let age = 20;

if (age > 18) {
  console.log('Eres mayor de edad');
}

// else (si no)

if (age > 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// else if (si no)

if (age == 18) {
    console.log('Tienes 18 años');
} else if (age > 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// Operadores ternarios

const message = age == 25 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(message);

// Switch

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Lunes';
    break;
  case 2:
    dayName = 'Martes';
    break;
  case 3:
    dayName = 'Miercoles';
    break;
  case 4:
    dayName = 'Jueves';
    break;
  case 5:
    dayName = 'Viernes';
    break;
  case 6:
    dayName = 'Sabado';
    break;
  case 7:
    dayName = 'Domingo';
    break;
  default:
    dayName = 'No es un dia valido';
}

console.log(dayName);