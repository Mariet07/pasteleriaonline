/*
//funciones:
function saludar(nombre) {
    console.log(`Hola ${nombre}!`);
}

saludar("Maru");

//para funciones aritméticas
function sumar(a, b) {
    console.log(a + b);
}
sumar(5, 10);

//otra forma simplificada en una línea: función flecha (año 2015/2016 aprox), usa una constante, la flecha representa las llaves
const suma = (a, b) => console.log (a+b);
suma(7,10);

function presentar(nombre, edad, ciudad = "Ciudad no especificada") { //si el usuario no ingresa la ciudad va a parecer ese mensaje, sino, sobreescribe el parámetro y pone el argumento
    console.log(nombre + " tiene "  + edad + " años y vive en " + ciudad + ".");
}

presentar("Juan", 25, "Córdoba");

//Scope (ámbito) o Alcance de las variables

if (true) { //las llaves dan contexto de bloque
    let nombreLet = "Ana"; //tiene alcance de bloque
    var nombreVar = "Beto"; //tiene contexto de función
    const nombreConst = "Carlos";
}

console.log(nombreVar); //funciona: imprime "Beto"
console.log(nombreLet); //Error
console.log(nombreConst); //Error

while(i<1){
    let mensajeLet = "Hola";
    var mensajeVar = "Mundo";
    const mensajeCont = "!";
    i++;
}

console.log(mensajeVar);
console.log(mensajeLet);
console.log(mensajeCont);

for (let i = 0; i < 3; i++){
    letnumeroLet  
}
*/


/*
//calcular area de rectangulo

function calcularAreaRectangulo (base, altura){
    return base * altura;
}

function imprimirResultado(area){
    console.log("El area del rectangulo es: " + area);
}

let base = parseFloat(prompt("Ingrese la base: "));
let altura = parseFloat(prompt("Ingrese la altura: "));

let area = calcularAreaRectangulo(base, altura);

imprimirResultado(area);
*/

//DOM:
/*
let elemento = document.getElementById("titulo"); //getElementById es una fc nativa
console.log(elemento);
elemento.style.color = "red";
elemento.style.fontFamily = "Cursive";
*/

/*
let cajas = document.getElementsByClassName("cajas"); // sería un array
console.log(cajas);

for (let i = 0; i < cajas.length; i++) {
    cajas[i].style.color = "green";
}
*/

/*
let primerParrafo = document.querySelector(".contenedor .texto") //queryselector se usa para las etiquetas de css (toma la 1er coincidencia, para cambiar más cosas debería usar un for, por ej para cambiar el texto 2)
console.log(primerParrafo);

primerParrafo.textContent = "Hola Mundo!";
*/

/* este sería el ejercicio #2 de la clase 12
let nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";
document.getElementById("lista").appendChild (nuevoElemento);
//agregar un alert:
alert("Se ha añadido un nuevo elemento") //ver si funciona correctamente cdo se agrega un nuevo elemento
*/

/*
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() { //addEventListener (que agregue un evento de escucha, va a estar esperando q se haga click en ese botón)
    console.log("Hiciste click en el botón!");
    alert("Hiciste click en el botón!");
});
*/

