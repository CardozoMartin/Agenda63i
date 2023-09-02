import { obtenerContactosDeLS } from "../utils.js";
import { AgregarContactosAlSelect, crearTarjetaDeContactos } from "./indexutils.js";

const contactos = obtenerContactosDeLS();
const sectionContactos = document.getElementById('section-contactos');
const alert = document.getElementById('alertResultado')


const estaLogueado = JSON.parse(sessionStorage.getItem('estaLogueado'));
if (!estaLogueado) {
  // No deberia poder ver la página
  window.location.href = './login.html';
}


contactos.forEach(element => {
    crearTarjetaDeContactos(element);
});


const buscarConctactos = document.getElementById('input-busqueda-contactos')

buscarConctactos.addEventListener('input',()=>{
    const nombreValor = buscarConctactos.value.toLowerCase();
    const nombresEncontrados = contactos.filter(item => 
         item.nombre.toLowerCase().includes(nombreValor)
    );
    sectionContactos.innerHTML = ""


  
    nombresEncontrados.forEach(contactoEncontrado => {
        crearTarjetaDeContactos(contactoEncontrado);

    });
})


//ahora creamos el select







contactos.forEach(element => {
    AgregarContactosAlSelect(element);
});



