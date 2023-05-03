//------------------------------------------------------------------------------------------------------------------------------
// Autor: Andrés Caso Iglesias
// Fecha de creación:26/04/2023
// Descripción: Añadidos basicos de javaScript (muchos no son necesarios, seria mas efectivo la modificacion del archivo .css)
//------------------------------------------------------------------------------------------------------------------------------

/**************************************** declaracion de acciones**********************************************/

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
    document.getElementById ("productoLimpieza").innerHTML += `<li>jabon de castilla</li>`;
  } catch (error) {console.log("modificacion de lista limpieza");}

// añadimos el nuevo producto a pedido
try{
  //declaracion de constantes que utilizaremos
  const tablaProducto = document.getElementById("tablaProducto");
  const nuevaFila = tablaProducto.insertRow();
  const celda1 = nuevaFila.insertCell();
  const celda2 = nuevaFila.insertCell();
  const celda3 = nuevaFila.insertCell();
  //insercion de todas las celdas del nuevo producto
  celda1.innerHTML = `<td><input name="pedido_jabon_liquido" type="checkbox" value="jabon de Castilla"/> Jabon de Castilla </td>`;
  celda2.innerHTML = `<td><p> 500 mililitros de jabon de castilla eco <br/> de un olor suave y delicado.</p></td>`;
  celda3.innerHTML = `<td><img src="../IMG/JCL.jpg" alt="jabon de Castilla" width="200" height="200"/></td>`;
}catch (error) {console.log("nuevo producto!!");}

/*************************************** declaracion de eventos ************************************************/

// vento que enlaza el logotipo con la pagina de inicio
  const logoInicio = document.getElementById('logo');

  logoInicio.addEventListener('click', function() {
    window.location.href = "../HTML/inicio.html" ;
  });

// aumenta el tamaño de los objetos del menu de inicio al pasar el raton sobre ellos y al moverse regresan al tamaño original
  const menuInicio = document.getElementById('menuInicio');
  menuInicio.addEventListener('mouseover', () => {
    menuInicio.style.fontSize = '2em';
  });
  menuInicio.addEventListener('mouseout', () => {
    menuInicio.style.fontSize = '1em';
  });

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

// Validacion de nueva contraseña
  try{ 
    document.getElementById("password").addEventListener("input", e => {
      const password = e.target.value; 
      // contraseña corta
      let passwordLength = "muy corto";
      let messageColor = "red";
      // contraseña adecuada
      if (password.length >= 8) {
        passwordLength = "adecuado";
        messageColor = "green"; 
      } 
      // Contraseña aceptable
      else if (password.length >= 4) {
        passwordLength = "aceptable";
        messageColor = "brown"; 
      }
      const passwordHelpElement = document.getElementById("passwordAyuda");
      passwordHelpElement.textContent = `${passwordLength}`; 
      passwordHelpElement.style.color = messageColor; 
    });
  }catch (error) {console.log("validacion contraseña");}
 
//muestra un mensage de ayuda al lado del imput nombre en "datos personales" en "datosypagopedido.html"      *********en proceso**********
    try{ 
      const nombreContacto = document.getElementById("nombreContacto");
      //muestra mensage ayuda
      nombreContacto.addEventListener("mouseover", e => {
        document.getElementById("helpNContacto").textContent = "introduce tu nombre";
        document.getElementById("helpNContacto").style.color = "green";
      });
      // oculta mensage de ayuda
      nombreContacto.addEventListener("mouseout", e => {
        document.getElementById("helpNContacto").textContent = "";
      });
//muestra un mensage de ayuda al lado del imput apellidos en "datos personales" en "datosypagopedido.html"
      const apellidosContacto = document.getElementById("apellidosContacto");
      //muestra mensage ayuda
      apellidosContacto.addEventListener("mouseover", e => {
        document.getElementById("helpAContacto").textContent = "introduce tus apellidos";
        document.getElementById("helpAContacto").style.color = "blue";
      });
      // oculta mensage de ayuda
      apellidosContacto.addEventListener("mouseout", e => {
        document.getElementById("helpAContacto").textContent = "";
      });
//muestra un mensage de ayuda al lado del imput telefono en "datos personales" en "datosypagopedido.html"
      const telefonoContacto = document.getElementById("telefonoContacto");
      //muestra mensage ayuda
      telefonoContacto.addEventListener("mouseover", e => {
        document.getElementById("helpTContacto").textContent = "introduce un numero de telefono fijo o movil";
        document.getElementById("helpTContacto").style.color = "green";
      });
      // oculta mensage de ayuda
      telefonoContacto.addEventListener("mouseout", e => {
        document.getElementById("helpTContacto").textContent = "";
      });
//muestra un mensage de ayuda al lado del imput calle en "direccion" en "datosypagopedido.html"
      const calleContacto = document.getElementById("calle");
      //muestra mensage ayuda
      calleContacto.addEventListener("mouseover", e => {
        document.getElementById("calleHelp").textContent = "introduce tu calle y el portal o numero de tu vivienda";
        document.getElementById("calleHelp").style.color = "blue";
      });
      // oculta mensage de ayuda
      calleContacto.addEventListener("mouseout", e => {
        document.getElementById("calleHelp").textContent = "";
      });
//muestra un mensage de ayuda al lado del imput codigo postal en "direccion" en "datosypagopedido.html"
      const codigoPostalContacto = document.getElementById("codigoPostal");
      //muestra mensage ayuda
      codigoPostalContacto.addEventListener("mouseover", e => {
        document.getElementById("cPHelp").textContent = "introduce el codigo postal de tu vivienda";
        document.getElementById("cPHelp").style.color = "green";
      });
      // oculta mensage de ayuda
      codigoPostalContacto.addEventListener("mouseout", e => {
        document.getElementById("cPHelp").textContent = "";
      });
    } catch (error) {console.log("info pedido")}
 

/*************************************** declaracion de variables***********************************************/

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



//comprobacion de correo electronico valido
 try{
  const correo = document.getElementById('correo').addEventListener("blur", e =>{
    const correoPlantilla = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mensageValidacion = "";
    if (!correoPlantilla.test(e.target.value)){
      mensageValidacion = "correo no valido";
      document.getElementById("correoAyuda").style.color = "red";
    } else {
      mensageValidacion = "correo valido";
      document.getElementById("correoAyuda").style.color = "green";
    }
    document.getElementById("correoAyuda").textContent = mensageValidacion;
  });
  } catch (error) {console.log("validacion correo")}

/************************************declaracion de funciones**********************************************/

//funcion para cambiar el color al pasasr raton sobre objeto y que se quede de ese color
  function pasarRaton() {
    event.target.style.backgroundColor = 'green';
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





