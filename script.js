document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const gallery = document.querySelector('.galeria');
const images = document.querySelectorAll('.imagen');
let index = 0;

function showImage(n) {
    images[index].style.display = 'none';
    index = (n + images.length) % images.length;
    images[index].style.display = 'block';
}

function nextImage() {
    showImage(index + 1);
}

function prevImage() {
    showImage(index - 1);
}

setInterval(nextImage, 5000); // Cambiar automáticamente las imágenes cada 5 segundos

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para validar el formulario
    // y mostrar mensajes de éxito o error según corresponda
    alert('Mensaje enviado con éxito');
    form.reset(); // Limpia el formulario después del envío
});

const ofertas = document.querySelectorAll('.oferta');

ofertas.forEach(oferta => {
    oferta.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    oferta.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease';
    });
});


// script.js PROCEDIMIENTOS

document.addEventListener('DOMContentLoaded', function () {
    const proceduresList = document.querySelector('.procedures');
    const menu = document.createElement('ul');
    menu.classList.add('menu');

    // Crear el menú de procedimientos
    proceduresList.querySelectorAll('.procedure h3').forEach(function (procedureTitle, index) {
        const menuItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = procedureTitle.textContent;
        link.href = '#' + index; // Asignar un identificador único a cada procedimiento
        menuItem.appendChild(link);
        menu.appendChild(menuItem);

        // Mostrar información del procedimiento al hacer clic en el menú
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const procedureInfo = document.querySelector('.procedure-info[data-index="' + index + '"]');
            toggleProcedureInfo(procedureInfo);
        });
    });

    // Añadir el menú al documento
    document.body.insertBefore(menu, document.body.firstChild);

    // Función para mostrar u ocultar la información del procedimiento
    function toggleProcedureInfo(procedureInfo) {
        procedureInfo.classList.toggle('show');
    }
});

function redirectToProcedures() {
    window.location.href = "procedimientos.html"; // Redirige a procedimientos.html
}

