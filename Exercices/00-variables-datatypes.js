// 1. Escribe un comentario en una lí­nea.
// Esto es un comentario simple

// 2. Escribe un comentario en varias lí­neas.
/* Esto es un comentario
en varias lí­neas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.
let myName = "Daniel";
let age = 25;
let height = 1.75;
let isWorking = true;
let isNull = null;
let isUndefined;
let isSymbol = Symbol("mySymbol");
let bigNumber = BigInt(123456789123456789);
// 4. Imprime por consola el valor de todas las variables.
console.log(myName);
console.log(age);
console.log(height);
console.log(isWorking);
console.log(isNull);
console.log(isUndefined);
console.log(isSymbol);
console.log(bigNumber);

// 5. Imprime por consola el tipo de todas las variables.
console.log(typeof myName);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isWorking);
console.log(typeof isNull);
console.log(typeof isUndefined);
console.log(typeof isSymbol);
console.log(typeof bigNumber);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo.
myName = "Africa";
age = 30;
height = 1.80;
isWorking = false;
isNull = null;
isUndefined = undefined;
isSymbol = Symbol("mySymbol2");
bigNumber = BigInt(987654321987654321);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo.
myName = 36
age = "15";
height = true;
isWorking = null;
isNull = undefined;
isUndefined = Symbol("mySymbol3");
isSymbol = BigInt(987654321987654321);
bigNumber = "987654321987654321";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.
const constName = "Daniel";
const constAge = 25;
const constHeight = 1.75;
const constIsWorking = true;
const constIsNull = null;
const constIsUndefined = undefined;
const constIsSymbol = Symbol("mySymbol");
const constBigNumber = BigInt(123456789123456789);

// 9. A continuación, modifica los valores de las constantes.
/*
constName = "Africa";
constAge = 30;
constHeight = 1.80;
constIsWorking = false;
constIsNull = null;
constIsUndefined = undefined;
constIsSymbol = Symbol("mySymbol2");
constBigNumber = BigInt(987654321987654321);
*/

// 10. Comenta las lí­neas que produzcan algún tipo de error al ejecutarse.
// Modificado en el ejercicio anterior