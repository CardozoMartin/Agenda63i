export const AgregarContactosAlSelect = (contacto) => {
    const selecContactos = document.getElementById('select-contactos');
    const nombreContacto = document.createElement('option'); // Cambia 'value' a 'option'
    nombreContacto.innerText = contacto.nombre;

    selecContactos.appendChild(nombreContacto);
}



export const crearTarjetaDeContactos = (contacto)=>{
    const sectionContactos = document.getElementById('section-contactos');
    
    //creamos la tarjeta
    const tarjetaDeContactos = document.createElement('div');
    tarjetaDeContactos.classList = "col mb-5 w-25 card text-center mx-2"

    const tarjetaImagen = document.createElement('img');
    tarjetaImagen.classList= "card-img-top"
    tarjetaImagen.src = contacto.imagen;
    tarjetaImagen.alt = contacto.nombre;
    tarjetaDeContactos.appendChild(tarjetaImagen);

    const tarjetaNombre = document.createElement('h3')
    tarjetaNombre.classList= "mt-2"
    tarjetaNombre.innerText = contacto.nombre;
    tarjetaDeContactos.appendChild(tarjetaNombre)

    const tarjetaEmail = document.createElement('p')
    tarjetaEmail.classList = "fw-bolder"
    tarjetaEmail.innerText = contacto.email;
    tarjetaDeContactos.appendChild(tarjetaEmail)

    const tarjetaTelefono = document.createElement('p')
    tarjetaTelefono.classList = "fw-bolder"
    tarjetaTelefono.innerText = contacto.numero;
    tarjetaDeContactos.appendChild(tarjetaTelefono)



    sectionContactos.appendChild(tarjetaDeContactos)
    
}