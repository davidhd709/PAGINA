<!-- contactanos.html -->
<script>
    // Función para enviar el formulario
    function enviarFormulario() {
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;
        const comentarios = document.getElementById("comentarios").value;
        const medioContacto = document.getElementById("medio_contacto").value;

        // Aquí puedes realizar validaciones adicionales antes de enviar los datos

        const formData = {
            nombre,
            telefono,
            email,
            comentarios,
            medioContacto,
        };

        // Enviar los datos del formulario mediante fetch o AJAX
        fetch("url_del_servidor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Aquí puedes manejar la respuesta del servidor
                console.log(data);
                alert("Formulario enviado con éxito");
            })
            .catch((error) => {
                // Aquí puedes manejar el error si ocurre algún problema al enviar el formulario
                console.error("Error al enviar el formulario:", error);
            });
    }

    // Asignar la función al botón de enviar
    document.addEventListener("DOMContentLoaded", function () {
        const enviarBtn = document.querySelector(".btn-enviar");
        enviarBtn.addEventListener("click", function (event) {
            event.preventDefault();
            enviarFormulario();
        });
    });
</script>
