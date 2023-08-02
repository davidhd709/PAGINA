// JavaScript code

// Function to display a message in the console when the "+ Info" buttons are clicked
function showInfoMessage() {
    console.log("Información adicional sobre el servicio.");
}

// Function to change the style of the "Administración en línea" button when clicked
function changeButtonStyle() {
    const floatingButton = document.querySelector('.floating-button');
    floatingButton.style.backgroundColor = "#278d20";
    floatingButton.style.color = "#fff";
}

// Add event listeners to the "+ Info" buttons
const infoButtons = document.querySelectorAll('.carta button');
infoButtons.forEach(button => {
    button.addEventListener('click', showInfoMessage);
});

// Add event listener to the "Administración en línea" button
const floatingButton = document.querySelector('.floating-button');
floatingButton.addEventListener('click', changeButtonStyle);

function cambiarPagina(pagina) {
    window.location.href = pagina;
}

// Asignar la función a los enlaces del menú
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            cambiarPagina(link.getAttribute("href"));
        });
    });
});
        
        < !--cualquier página con imágenes-- >

    // Función para agregar/quitar clase al hacer clic en una imagen
    function toggleImageTransition(event) {
        const img = event.target;
        img.classList.toggle("image-transition");
    }

// Asignar la función a todas las imágenes
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.addEventListener("click", toggleImageTransition);
    });
});


< !--Agrega el siguiente CSS a tu archivo style.css-- >
    <style>
        .image-transition {
            transition: transform 0.3s ease-in-out;
        transform: scale(1.2);
    }
    </style>

