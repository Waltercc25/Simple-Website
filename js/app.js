//   NAVABAR

const navLinks = document.querySelectorAll('#main-nav a');
//Iterar sobre cada enlace.
navLinks.forEach((link)=>{
    //verificar si el atributo href es igual a la página actual.
    if(link.href === window.location.href){ //si el link seleccionado es el de la pagina actual se activa
        //aplicar la clase '.active' al enlace esta clase .active ya  tiene estilos en el documento css y ahi es donde recibe su estilo.
        link.classList.add('active'); 
    }
});

//Menu para versión movil.
const navbarIcon = document.querySelector('#navbar-toggle');
const navbarContainer = document.querySelector('#main-nav');
navbarIcon.addEventListener('click', ()=>{
    //verificar si la lista de enlaces del menú de navegación esta visible.
    if(navbarContainer.style.display === 'block'){
        //ocultar lista de enlaces del menú
        navbarContainer.style.display = 'none';
    } else{
        // Mostrar la lista de enlaces del menú de navegación.
        navbarContainer.style.display = 'block';
    }
});

//Ventana modal con formulario de inicio de sesion.
const loginLink = document.querySelector('#login-register');
const modalContainer = document.querySelector('#modal-container');
loginLink.addEventListener('click', ()=>{
    //mostar la ventana modal.
    modalContainer.style.display = 'block';
});

//cerrar ventana modal.
modalContainer.addEventListener('click', (e)=>{
    //si el click ocurre fuera de la ventana modal se cierra la ventana.
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});

//Establecer año actual en el Footer.
const currentYear = document.querySelector('#date');
currentYear.innerHTML = new Date().getFullYear(); 