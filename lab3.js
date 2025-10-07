document.addEventListener("DOMContentLoaded", () => {

const btn = document.getElementById("btnCargar");

if (btn) {
    btn.addEventListener("click", () => {
        // Esto es para capturar valores del formulario
        document.getElementById("tdNombre").textContent = document.getElementById("nombre").value || "";
        document.getElementById("tdApellido").textContent = document.getElementById("apellido").value || "";
        document.getElementById("tdEmail").textContent = document.getElementById("email").value || "";
        document.getElementById("tdTelefono").textContent = document.getElementById("telefono").value || "";
        document.getElementById("tdEdad").textContent = document.getElementById("edad").value || "";
        document.getElementById("tdDireccion").textContent = document.getElementById("direccion").value || "";
        document.getElementById("tdProvincia").textContent = document.getElementById("provincia").value || "";
        document.getElementById("tdCodigoPostal").textContent = document.getElementById("codigoPostal").value || "";

        // Metodo de contacto seleccionado
        const metodo = document.querySelector('input[name="metodo"]:checked');
        document.getElementById("tdMetodo").textContent = metodo ? metodo.value : "";

        // Suscripciones seleccionadas
        const suscripciones = document.querySelectorAll('input[name="suscripcion"]:checked');
        const valores = Array.from(suscripciones).map(el => el.value).join(", ");
        document.getElementById("tdSuscripcion").textContent = valores;
    });
} else {
    console.warn('Botón btnCargar no encontrado en la página.');
}
});