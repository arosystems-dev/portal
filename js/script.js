/* ////////////////////////
      INDEX (CSS)
//////////////////////// */


/* -----------------------
      VARIABLES
----------------------- */
var navBoton = document.getElementById('navBoton');
var navMenu = document.getElementById('navMenu');
var enlace1 = document.getElementById('enlace1');
var enlace2 = document.getElementById('enlace2');
var enlace3 = document.getElementById('enlace3');
// MODAL
var modal = document.getElementById("modal");


/* -----------------------
      FUNCIONES
----------------------- */

function mostrarOcultarNav() {
      navMenu.classList.toggle('ocultarNavMenu');
}

function abrirModal() {
      modal.style.display = "flex";
}

function cerrarModal() {
      modal.style.display = "none";
}

// ROUTES LOCAL / PRODUCCIÓN
function rutaRepositorio(repositorio) {
      if (window.location.hostname === 'arosystems-dev.github.io') {
            return 'https://arosystems-dev.github.io/' + repositorio + '/';
      } else {
            return '../' + repositorio + '/index.html';
      }
}

/* -----------------------
      EVENTOS
----------------------- */


navBoton.addEventListener('click', mostrarOcultarNav);
enlace1.addEventListener('click', mostrarOcultarNav);
enlace2.addEventListener('click', mostrarOcultarNav);
enlace3.addEventListener('click', mostrarOcultarNav);

// ROUTES
document.getElementById('link-logica-programacion').href = rutaRepositorio('aro_course-01_logica-programacion_implementation');
document.getElementById('link-desarrollo-web').href = rutaRepositorio('aro_course-04_desarrollo-web');
document.getElementById('link-redes').href = rutaRepositorio('aro_note-03_redes');

