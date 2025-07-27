//instrucciones desafio 4
alert(`¡Asegurate de abrir las herramientas para esarrollador! \nPresiona la tecla F12!`);

console.log('¡Bienvenido!');    //muestra nombre en consola

//solicita un nombre
let nombre = prompt("¿Cuál es tu nombre?:");       // 'Raúl - Deep';
console.log(`¡Hola, ${nombre}!`);   //muestra nombre en consola


//muestra nombre en pantalla
alert(`¡Hola, ${nombre}!`);


//pide ingresar un lenguaje
let lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');   //crea y asina a variable
console.log(lenguajePreferido);     //muestra en consila


//suma valores 1 y 2
let valor1 = parseFloat(prompt("Ingresa valor 1:"));       //crea variable y asinga con prompt
let valor2 = parseFloat(prompt("Ingresa valor a sumar 2:"));        //crea variable y asinga con prompt
let resultado = valor1 + valor2;        //calcula suma de valores
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);       //muestra resultado en consola


//resta valores 3 y 4
valor1 = parseFloat(prompt("Ingresa valor 3:"));      //crea variable y asinga con prompt
valor2 = parseFloat(prompt("Ingresa valor arestar 4:"));       //crea variable y asinga con prompt
resultado = valor1 - valor2;        //calcula resta de valores
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);      //muestra resultado en consola


//edad
let edad = prompt(`Ingresa tu edad ${nombre}:`);        //pide la edad con prompt
if (edad > 17) {        //compara si es mayor a 17
    console.log(`Eres mayor de edad ${nombre}.`);       //muestra en consola es mayor de edad
} else {
    console.log(`Eres menor de edad ${nombre}.`);       //muestra en consola es menor de edad
}


//determina si es numero positivo o negativo
let numero = parseFloat(prompt("Ingresa un número:"));      //crea variable y asigna valor con un prompt
if (numero > 0) {           //compara si el valor es mayor a 0
    console.log("El número es positivo.");      //si es mayor a 0 muestra en consola número es positivo
} else if (numero < 0) {        //de lo contrario compara si es menor a cero
    console.log("El número es negativo.");      //si es menjor a cero muestra enconsola número es negatico
} else {
    console.log("El número es cero.");      //si no es menor a cero muestra en consola es cero
}


//loop numeros
numero = 10;        //asigna valor de 10 a numero
while (numero <= 20) {      //iniica loop mientras número es menor o igual a 20
    console.log(numero);        //muestra en consola el valor de variable numero
    numero++;       //incrementa variable numero +1
}


//calificacion
let nota = 0;       //crea variable y asigna valor de cero
nota = parseFloat(prompt("Ingresa una calificación:"));     //pide una calificación con prompt convirtiendo a número
if (nota >= 7) {        //compara si el valor en variable nota es mayor o iguala 7
    console.log("Aprobado");        //si es cierto muesta en consola aprobado
} else {
    console.log("Reprobado");       //si valor de variable nota es menor a 7 muestra en consola reprobado
}


//genera número aleatoria
let numeroAleatorio = Math.random();        //crea variable y asigna valor aleatorio de cálculo de función
console.log(numeroAleatorio);       //muestra en consola valor de variavle


//genea número aleatorio por rango entre 1 y 10
numeroIntAleatorio = parseInt(Math.random() * 10) + 1;      //asigna valor aleatorio de cálculo de función ente valor 1 y 10
console.log(numeroIntAleatorio);        //muestra en consola valor de variavle


//genea número aleatorio por rango entre 1 y 1000
numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;        //asigna valor aleatorio de cálculo de función ente valor 1 y 1000
console.log(numeroIntAleatorio);        //muestra en consola valor de variavle