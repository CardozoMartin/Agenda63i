const btnDark = document.getElementById('btnDark');
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const a = document.querySelectorAll('a')
const label = document.querySelectorAll('label')
const footer = document.querySelector('footer')
const sectioMsj = document.querySelector('section')
const h1mensaje = document.querySelector('h1')
const btnMsj = document.getElementById('btnMsj')
const cardContactoDark = document.querySelector('.cardDark')




// Verifica si hay una preferencia de dark mode guardada en el localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Aplica el modo oscuro si está activo
if (isDarkMode) {

  body.classList.add('darkMode');
  
}

btnDark.addEventListener('click', (e) => {
 body.classList.toggle('darkMode');
 nav.classList.toggle('navDark')
 
 a.forEach((a) => {
    a.classList.toggle('text-light');
  });
 sectioMsj.classList.toggle('sectioMsjDark')
 h1mensaje.classList.toggle('text-white')
 label.forEach((lab)=>{
    lab.classList.toggle('text-white')
 })
 btnMsj.classList.toggle('btnDarkMsj')

 
 
 footer.classList.toggle("bg-dark");


  // Guarda la preferencia de modo oscuro en el localStorage
  const isDarkModeActive = body.classList.contains('darkMode');
  btnDark.textContent = isDarkModeActive ? 'Modo Claro' : 'Modo Oscuro';
  btnDark.classList.toggle('btn-outline-light', isDarkModeActive);
  btnDark.classList.toggle('btn-outline-dark', !isDarkModeActive);
  localStorage.setItem('darkMode', isDarkModeActive.toString());
});

function toggleDarkMode() {
    
  
    // Cambia el texto del botón según el nuevo estado del modo oscuro
    const isDarkModeActive = body.classList.contains('darkMode');
    btnDark.textContent = isDarkModeActive ? 'Modo Claro' : 'Modo Oscuro';
  
    // Guarda la preferencia de modo oscuro en el localStorage
    localStorage.setItem('darkMode', isDarkModeActive.toString());
  }
  
  // Asigna el evento click al botón
  btnDark.addEventListener('click', toggleDarkMode);
  
  
  toggleDarkMode();

 
