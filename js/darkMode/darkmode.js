const btnDark = document.getElementById('btnDark');
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const a = document.querySelectorAll('a')
const h1 = document.getElementById('bienvenidoH1')
const p = document.querySelectorAll('p')
const h2 = document.querySelector('h2')
const label = document.querySelectorAll('label')
const articleDeInicio = document.getElementById("DeInicio");
const btnSesion =document.getElementById('btnSesion')
const footer = document.querySelector('footer')

// Verifica si hay una preferencia de dark mode guardada en el localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Aplica el modo oscuro si está activo
if (isDarkMode) {

  body.classList.add('darkMode');
  nav.classList.add('navDark');
  
  
  a.forEach((a) => {
    a.classList.add('text-light');
  });
  h1.classList.add('text-light');
  p.forEach((p) => {
    p.classList.add('text-light');
  });
  label.forEach((lab) => {
    lab.classList.add('twhite');
  });
  h2.classList.add('text-light');
  articleDeInicio.classList.add('inicioDark');
  footer.classList.add("bg-dark");
}

btnDark.addEventListener('click', (e) => {
  // Cambia el modo oscuro
  body.classList.toggle('darkMode');
  nav.classList.toggle('navDark');
  a.forEach((a) => {
    a.classList.toggle('text-light');
  });
  h1.classList.toggle('text-light');
  p.forEach((p) => {
    p.classList.toggle('text-light');
  });
  label.forEach((lab) => {
    lab.classList.toggle('twhite');
  });
  h2.classList.toggle('text-light');
  articleDeInicio.classList.toggle('inicioDark');
  btnSesion.classList.toggle('btnColor')
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

