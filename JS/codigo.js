/*
 * Autor: Andrés Caso Iglesias
 * Fecha de creación:26/04/2023
 * Descripción: Añadidos basicos de javaScript (muchos no son necesarios, seria mas efectivo la modificacion del fichero .css)
 */

/*
* declaracion de eventos
*/

// info que imprimimos por pantalla
console.log("Hello, world!");
console.log("Este proyecto ha sido realizado por Andres Caso.");
console.log("Si necesitas algun tipo de informacion adiccional, ruego pongase en contacto OHJ39199@educastur.es");

// evento mensage de carga que solo se muestre en pagina de inicio
if (window.location.pathname.endsWith("inicio.html")) {
  window.addEventListener("load", e => {
    alert("Bienvenido!!");
 });
}

/*
* declaracion de funciones
*/

//funcion para cambiar el color al pasasr raton sobre objeto y que se quede de ese color
function pasarRaton() {
  event.target.style.backgroundColor = 'red';
  event.target.style.color = 'white';
}
// Este document.getElementById ("limpieza") lo he integrado en una funcion que espera hasta
// que la pagina se carge antes de añadirlo; ya que no se mostraba al no cargarse bien la pagina
window.addEventListener(`load`, function(){
  //modificar la <li> productos
document.getElementById ("limpieza").innerHTML += `<li>jabon de castilla<li>`;
});

//// Función que se ejecutará al pasar el ratón sobre el objeto y se ejecuta al quitar el ratón del objeto
const tituloBlog = document.getElementById("tituloBlog");
function aumentar() {
  tituloBlog.style.transform = "scale(1.2)";
  tituloBlog.style.transition = "transform 0.2s ease-in-out";
}
function reducir() {
  tituloBlog.style.transform = "scale(1)";
  tituloBlog.style.transition = "transform 0.2s ease-in-out";
}
//llama a las funciones en el evento 
tituloBlog.addEventListener("mouseenter", aumentar);
tituloBlog.addEventListener("mouseleave", reducir);


/*
* declaracion de variables
*/

// aumenta el tamaño de los objetos del menu de inicio al pasar el raton sobre ellos y al moverse regresan al tamaño original
const menuInicio = document.getElementById('menuInicio');
menuInicio.addEventListener('mouseover', () => {
  menuInicio.style.fontSize = '2em';
});
menuInicio.addEventListener('mouseout', () => {
  menuInicio.style.fontSize = '1em';
});



//cambiar font type de los <h2>
const headings = document.querySelectorAll('h2');
headings.forEach((heading) => {
heading.style.fontFamily = 'arial';
});

//modificar los estilos css para <p> (sin ninguna asignacion especifica)
const parrafoElement = document.querySelector("p");
parrafoElement.style.color = "brown";
parrafoElement.style.margin = "0.5em";

// definimos por defecto lo que mostraran los imput de newUser
const usernameElement = document.getElementById("nombre");
usernameElement.value = "tu nombre";
// otra manera de hacer lo mismo
document.getElementById("apellido1").value = "apellidazo";
document.getElementById("apellido2").value = "apellidazo";

//previene que el usuario abandone la pagina sin guardar los cambios al registrarse o identificarse
const form = document.querySelector('form');
form.addEventListener('change', function() {
  hasUnsavedChanges = true;
});
window.addEventListener('beforeunload', function(event) {
  if (hasUnsavedChanges) {
    event.preventDefault();
    event.returnValue = '';
  }
});




