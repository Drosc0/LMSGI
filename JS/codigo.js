/*
 * Autor: Andrés Caso Iglesias
 * Fecha de creación:26/04/2023
 * Descripción: Añadidos basicos de javaScript (muchos no son necesarios, seria mas efectivo la modificacion del archivo .css)
*/

/*
* declaracion de eventos
*/

// info que imprimimos por consola
  console.log("Hello, world!");
  console.log("Este proyecto ha sido realizado por Andres Caso.");
  console.log("Si necesitas algun tipo de informacion adiccional, ruego pongase en contacto OHJ39199@educastur.es");

// evento mensage de carga que solo se muestre en pagina de inicio
  if (window.location.pathname.endsWith("inicio.html")) {
    window.addEventListener("load", e => {
      alert("Bienvenido!!");
  });
  }

//modificar la <li> productos añadiendo un producto al final
  try{ 
    document.getElementById ("limpieza").innerHTML += `<li>jabon de castilla<li>`;
  } catch (error) {("modificacion de lista limpieza");}

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

//modificar el estilos css para <p> 
const parrafoElement = document.querySelectorAll("p");
parrafoElement.forEach((parrafoElement) => {
  parrafoElement.style.color = "brown";
  parrafoElement.style.margin = "0.5em";
});


// definimos por defecto lo que mostraran los imput del formulario de registro
try{
  const newUserElement = document.getElementById("nombre");
  newUserElement.value = "tu nombre";
  // otra manera de hacer lo mismo, pero aplicado a los apellidos
  document.getElementById("apellido1").value = "apellidazo1";
  document.getElementById("apellido2").value = "apellidazo2";
} catch (error) {console.log("no hay formulario de registro en esta pagina")}

// 

//previene que el usuario abandone la pagina sin guardar los cambios al rellenar el formulario de registro
try{
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
} catch (error) {console.log("no hay ningun formulario en esta pagina");}

/*
* declaracion de funciones
*/

//funcion para cambiar el color al pasasr raton sobre objeto y que se quede de ese color
  function pasarRaton() {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'white';
  }

// Función que se ejecutará al pasar el ratón sobre el objeto (titulo principal de "nosotros" y de "blog") y  al quitar el ratón del objeto
  //asignacion constante que hace referaencia al objeto en cuestion
  const tituloBlog = document.getElementById("tituloBlog");
  //funcion aumentar tamaño
  function aumentar() {
    tituloBlog.style.transform = "scale(1.2)";
    tituloBlog.style.transition = "transform 0.2s ease-in-out";
  }
  //funcion reducir tamaño 
  function reducir() {
    tituloBlog.style.transform = "scale(1)";
    tituloBlog.style.transition = "transform 0.2s ease-in-out";
  }
  //llama a las funciones en el evento 
  try{
    tituloBlog.addEventListener("mouseenter", aumentar);
    tituloBlog.addEventListener("mouseleave", reducir);
  } catch (error){("no es necesario en esta pagina");} 






