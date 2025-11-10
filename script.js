// lab3.js
document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("Formulario");

  // Campos y sus celdas correspondientes
const map = {
    nombre: "tdNombre",
    apellido: "tdApellido",
    email: "tdEmail",
    telefono: "tdTelefono",
    edad: "tdEdad",
    direccion: "tdDireccion",
    provincia: "tdProvincia",
    codigoPostal: "tdCodigoPostal",
};

  // Cuando el usuario termina de rellenar un campo (blur o change)
Object.keys(map).forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("blur", () => actualizarCampo(id));
    input.addEventListener("change", () => actualizarCampo(id));
});

  // Método de contacto (radios)
document.querySelectorAll("input[name='metodo']").forEach((radio) => {
    radio.addEventListener("change", () => {
    const seleccionado = document.querySelector("input[name='metodo']:checked");
    document.getElementById("tdMetodo").textContent = seleccionado ? seleccionado.value : "";
    });
});

  // Suscripciones (checkboxes)
document.querySelectorAll("input[name='suscripcion']").forEach((check) => {
    check.addEventListener("change", () => {
        const seleccionados = Array.from(
        document.querySelectorAll("input[name='suscripcion']:checked")
        ).map((el) => el.value);
        document.getElementById("tdSuscripcion").textContent = seleccionados.join(", ");
    });
});

  // Actualizar una celda del mapa
function actualizarCampo(id) {
    const valor = document.getElementById(id).value.trim();
    document.getElementById(map[id]).textContent = valor || "—";
}
});
