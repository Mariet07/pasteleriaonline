/*
//lista como estructura de datos:

let frutas = ["Banana", "Melón", "Pera"]

console.log(frutas[2]); //llamo a la lista q me muestre el elemento del índice 2 por ej.


//recorro la lista con un ciclo for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
*/

//objetos: nos permiten estructurar los datos de manera mas ordenada, se usan llaves en vez de corchetes. cada objeto se ordena con un par clave valor, ej:clave id valor 1
/*let productos = { 
    id: 1,
    celular: "Nokia 1100",
    precio: 350000,
    descuento: true
};*/

//llamamaos a los objetos así:
//console.log(productos.celular);
//otra manera de llamar la clave valor:
//console.log(productos["precio"]);

//lista lleva [] --> let frutas = []
//objetos lleva {} --> let prod = {}

//lista de objetos: coloco cada uno de los objetos dentro de una lista usando corchetes y llaves para cada objeto --> let productos = [{objeto1}, {objeto2}, {objeto3}, {objeto...} ]

// para acceder a cualquiera de los elementos hay q hacer una acción combinada:

/*
let productos = [{ //agrego los corchetes para convertirlo en una lista de objetos
    id: 1,
    celular: "Nokia 1100",
    precio: 350000,
    descuento: true
}];

console.log(productos[0].celular); //llamo un objeto de la lista
*/

/*
//sessionStorage -->los datos se borran cuando se cierra el navegador xq es almacenamiento de sesion:
sessionStorage.setItem('usuario', 'Ana');
sessionStorage.setItem('edad', '30');

sessionStorage.clear(); //borra
*/

//datos quedan permanentes con localStorage aunque se cierre el navegador
//localStorage.setItem('usuario', 'Ana'); //con set guardo el dato
//localStorage.setItem('edad', '30');
//localStorage.clear(); //borra
/*
let usuario = localStorage.getItem //con get obtengo el dato
('usuario');
console.log(usuario);

localStorage.removeItem('usuario');
*/

//carrito del material ampliado
document.addEventListener('DOMContentLoaded', function() {
    cargarCarrito();
});


// Agregar producto al carrito
var botonesAgregar = document.getElementsByClassName('agregar-carrito');
for (var i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', agregarProducto);
}


// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click',
function() {
    localStorage.removeItem('carrito');
    cargarCarrito();
});


function agregarProducto(event) {
    var producto = {
    id: event.target.getAttribute('data-id'),
    nombre: event.target.getAttribute('data-nombre'),
    precio: event.target.getAttribute('data-precio')
    };


    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}


function cargarCarrito() {
    var listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';


    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];


    for (var i = 0; i < carrito.length; i++) {
    var producto = carrito[i];


    var li = document.createElement('li');
    li.textContent = producto.nombre + ' - $' + producto.precio;
    listaCarrito.appendChild(li);
    }
}