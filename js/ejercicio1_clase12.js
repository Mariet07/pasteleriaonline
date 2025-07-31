//Seleccionamos los elementos por su ID:
let parrafo = document.getElementById("texto1");
let boton = document.getElementById("boton");

//Agregamos un evento click al botón
boton.addEventListener("click", function() {
    //Modificamos el contenido del párrafo
    parrafo.textContent = "El texto ha sido modificado con JavaScript";
});