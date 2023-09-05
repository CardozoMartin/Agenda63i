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





const darkModo = localStorage.getItem('darkMode') === 'true';


if (darkModo) {

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
 cardContactoDark.classList.toggle('text-bg-dark')
 
 
 footer.classList.toggle("bg-dark");



  const darkModoActivado = body.classList.contains('darkMode');
  btnDark.textContent = darkModoActivado ? 'Modo Claro' : 'Modo Oscuro';
  btnDark.classList.toggle('btn-outline-light', darkModoActivado);
  btnDark.classList.toggle('btn-outline-dark', !darkModoActivado);
  localStorage.setItem('darkMode', darkModoActivado.toString());
});

function toggleDarkMode() {
    
  
  
    const darkModoActivado = body.classList.contains('darkMode');
    btnDark.textContent = darkModoActivado ? 'Modo Claro' : 'Modo Oscuro';
  
    
    localStorage.setItem('darkMode', darkModoActivado.toString());
  }
  
  
  btnDark.addEventListener('click', toggleDarkMode);
  
  
  toggleDarkMode();



