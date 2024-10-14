
// Seleccionar el botón y el contenedor de información
const toggleButton = document.getElementById("toggleInfo");
const infoContainer = document.getElementById("info");

// Agregar un evento de clic al botón
toggleButton.addEventListener("click", function() {
    // Verificar el estado actual de la visibilidad del contenedor
    if (infoContainer.style.display === "none") {
        // Si está oculto, lo mostramos
        infoContainer.style.display = "block";
        toggleButton.textContent = "Ocultar Información"; // Cambiar el texto del botón
    } else {
        // Si está visible, lo ocultamos
        infoContainer.style.display = "none";
        toggleButton.textContent = "Mostrar Información"; // Cambiar el texto del botón
    }
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores de los campos
    const fullName = document.getElementById("fullName").value.trim();
    const age = document.getElementById("age").value.trim();
    const country = document.getElementById("country").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const comments = document.getElementById("comments").value.trim();

    // Borrar los mensajes de error previos
    clearErrors();
    clearSuccessMessage();

    let isValid = true;

    // Validar Nombre y Apellido
    if (fullName === "") {
        document.getElementById("nameError").innerText = "Por favor, ingrese su nombre y apellido.";
        isValid = false;
    }

    // Validar Edad (debe ser un número positivo)
    if (age === "" || isNaN(age) || age <= 0) {
        document.getElementById("ageError").innerText = "Por favor, ingrese una edad válida.";
        isValid = false;
    }

    // Validar País (debe seleccionarse una opción)
    if (country === "") {
        document.getElementById("countryError").innerText = "Por favor, seleccione un país.";
        isValid = false;
    }

    // Validar Email (patrón de email)
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Patrón simple para validar email
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Por favor, ingrese un correo electrónico válido.";
        isValid = false;
    }

    // Validar Teléfono (números y longitud de 1 a 15 caracteres)
    const phonePattern = /^[0-9]{1,15}$/;
    if (phone === "" || !phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Por favor, ingrese un número de teléfono válido (solo números).";
        isValid = false;
    }

    // Validar Comentarios (no vacío)
    if (comments === "") {
        document.getElementById("commentsError").innerText = "Por favor, ingrese un comentario.";
        isValid = false;
    }

    // Si todo es válido, mostrar un mensaje de éxito
    if (isValid) {
        document.getElementById("successMessage").innerText = "Los datos fueron enviados correctamente.";
        document.getElementById("successMessage").style.color = "green";
        document.getElementById("contactForm").reset(); // Limpiar el formulario
    }
});

// Función para limpiar los mensajes de error
function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("ageError").innerText = "";
    document.getElementById("countryError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("commentsError").innerText = "";
}

// Función para limpiar el mensaje de éxito
function clearSuccessMessage() {
    document.getElementById("successMessage").innerText = "";
}



