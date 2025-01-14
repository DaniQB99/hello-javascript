// IF/ELSE/ELSE IF/TERNARIO

// 1. Imprime por consola tu nombre si una variable toma su valor.
let myName = 'Daniel';

if (myName == 'Daniel') {
  console.log('Hola ' + myName);
} 

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos.
let user = 'dani';
let password = '1234';

if (user == 'dani' && password == '1234') {
  console.log('Acceso permitido');
} else {
  console.log('Acceso denegado');
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje.
let number = 10;

if (number > 0) {
  console.log('El numero es positivo');
} else if (number < 0) {
  console.log('El numero es negativo');
} else {
  console.log('El numero es cero');
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let age = 20;

if (age >= 18) {
  console.log('Puedes votar');
} else {
    console.log(`No puedes votar, tienes que esperar ${age - 18} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let categorty = age >= 18 ? 'adulto' : 'menor'; 
console.log(categorty);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".
let month = 5;
let day = 3;

if (month >= 3 && month <= 5) {
  console.log('Estación de primavera');
} else if (month >= 6 && month <= 8) {
  console.log('Estación de verano');
} else if (month >= 9 && month <= 11) {
  console.log('Estación de otoño');
} else {
    console.log('Estación de invierno');
}
// 7. Muestra el numero de di­as que tiene un mes dependiendo de la variable del ejercicio anterior.
if (month === 2){
    console.log('28 o 29 días');
} else if ([4, 6, 9, 11].includes(month)) {
    console.log('30 días');
} else {
    console.log('31 días');
}

// SWITCH

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let lenguage = 'español';
switch (lenguage) {
  case 'español':
    console.log('Hola');
    break;
  case 'inglés':
    console.log('Hello');
    break;
  case 'francés':
    console.log('Bonjour');
    break;
  default:
    console.log('Lenguaje no aceptado');
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
switch(month) {
  case 3, 4, 5:
    console.log('Estación de primavera');
    break;
  case 6, 7, 8:
    console.log('Estación de verano');
    break;
  case 9, 10, 11:
    console.log('Estación de otoño');
    break;
  default:
    console.log('Estación de invierno');
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7.
switch(month) {
  case 2:
    console.log('28 o 29 días');
    break;
  case 4, 6, 9, 11:
    console.log('30 días');
    break;
  default:
    console.log('31 días');
}