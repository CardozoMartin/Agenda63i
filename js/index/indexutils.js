export const AgregarContactosAlSelect = (contacto) => {
    const selecContactos = document.getElementById('select-contactos');
    const nombreContacto = document.createElement('option');
    
    nombreContacto.innerText = contacto.nombre;

    selecContactos.appendChild(nombreContacto);
}



export const crearTarjetaDeContactos = (contacto)=>{
    const sectionContactos = document.getElementById('section-contactos');
    
    //creamos la tarjeta
    const tarjetaDeContactos = document.createElement('div');
    tarjetaDeContactos.classList = "col-sm-6 col-md-4 col-lg-3 card mb-5 text-center mx-2";


    const tarjetaImagen = document.createElement('img');
    tarjetaImagen.classList= "card-img-top"
    tarjetaImagen.src = contacto.imagen;
    tarjetaImagen.alt = contacto.nombre;
    tarjetaDeContactos.appendChild(tarjetaImagen);

    const tarjetaBody = document.createElement('div')
    tarjetaBody.classList = "card-body p-4"

    const tarjetaNombre = document.createElement('h5')
    tarjetaNombre.classList= "mt-2"
    tarjetaNombre.innerText = contacto.nombre;
    tarjetaBody.appendChild(tarjetaNombre)

    const tarjetaEmail = document.createElement('p')
    tarjetaEmail.classList = "fw-bolder"
    tarjetaEmail.innerText = contacto.email;
    tarjetaBody.appendChild(tarjetaEmail)

    const tarjetaTelefono = document.createElement('p')
    tarjetaTelefono.classList = "fw-bolder"
    tarjetaTelefono.innerText = contacto.numero;
    tarjetaBody.appendChild(tarjetaTelefono)


    tarjetaDeContactos.appendChild(tarjetaBody)
    sectionContactos.appendChild(tarjetaDeContactos)
    
}