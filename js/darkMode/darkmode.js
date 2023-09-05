const btnDark = document.getElementById('btnDark');
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const a = document.querySelectorAll('a')
const h1 = document.getElementById('bienvenidoH1')
const h1mobil = document.querySelector('h1')
const p = document.querySelectorAll('p')
const h2 = document.querySelector('h2')
const label = document.querySelectorAll('label')
const articleDeInicio = document.getElementById("DeInicio");
const btnSesion =document.getElementById('btnSesion')
const footer = document.querySelector('footer')
const titleAdmin = document.querySelector('h1')


const darkMode = localStorage.getItem('darkMode') === 'true';


if (darkMode) {

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
  h1mobil.classList.toggle('text-white')
  footer.classList.toggle("bg-dark");
  titleAdmin.classList.toggle('twhite')


 
  const darkModeActivado = body.classList.contains('darkMode');
  btnDark.textContent = darkModeActivado ? 'Modo Claro' : 'Modo Oscuro';
  btnDark.classList.toggle('btn-outline-light', darkModeActivado);
  btnDark.classList.toggle('btn-outline-dark', !darkModeActivado);
  localStorage.setItem('darkMode', darkModeActivado.toString());
});

function toggleDarkMode() {
    
  
    
    const darkModeActivado = body.classList.contains('darkMode');
    btnDark.textContent = darkModeActivado ? 'Modo Claro' : 'Modo Oscuro';
  
  
    localStorage.setItem('darkMode', darkModeActivado.toString());
  }
  
  
  btnDark.addEventListener('click', toggleDarkMode);
  
  
  toggleDarkMode();

