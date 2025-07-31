const lista = document.getElementById("lista");
const btnAgregar = document.getElementById("btnAgregar");
const btnVaciar = document.getElementById("btnVaciar");

btnAgregar.onclick = function() {
    const nvoProducto = document.createElement('li');
    nvoProducto.textContent = 'Nuevo Producto';
    lista.appendChild(nvoProducto);
}

btnVaciar.onclick = function() {
    const carritoVacio = document.getElementById('lista');
    carritoVacio.innerHTML = '';
    alert("¿Desea vaciar su carrito?")
}