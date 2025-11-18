document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("Formulario");

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

    const validators = {
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        codigoPostal: (value) => /^[0-9]{4,8}$/.test(value),
        telefono: (value) => value.length >= 6 || value === "",
        edad: (value) => Number(value) > 0 || value === "",
        nombre: (value) => value.length >= 2,
        apellido: (value) => value.length >= 2,
        direccion: (value) => value.length >= 3 || value === "",
        provincia: (value) => value !== "",
    };

    // Manejo de inputs
    Object.keys(map).forEach((id) => {
        const input = document.getElementById(id);
        if (!input) return;

        input.addEventListener("input", () => validarYActualizar(id));
        input.addEventListener("blur", () => validarYActualizar(id));
    });

    // Función que valida y actualiza tabla
    function validarYActualizar(id) {
        const input = document.getElementById(id);
        const value = input.value.trim();
        const td = document.getElementById(map[id]);

        if (validators[id] && !validators[id](value)) {
            mostrarError(input, obtenerMensajeError(id));
            td.textContent = "—";
        } else {
            limpiarError(input);
            td.textContent = value || "—";
        }
    }

    // Mensajes personalizados
    function obtenerMensajeError(id) {
        const msgs = {
            email: "El correo debe tener un formato válido (ej: ejemplo@gmail.com).",
            codigoPostal: "El código postal debe tener entre 4 y 8 números.",
            telefono: "El teléfono debe tener al menos 6 dígitos.",
            edad: "La edad debe ser un número mayor a 0.",
            nombre: "El nombre debe tener al menos 2 caracteres.",
            apellido: "El apellido debe tener al menos 2 caracteres.",
            direccion: "La dirección debe tener al menos 3 caracteres.",
            provincia: "Debes seleccionar una provincia.",
        };
        return msgs[id] || "Dato inválido";
    }

    // Mostrar errores
    function mostrarError(input, mensaje) {
        input.classList.add("error");

        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-msg")) {
            error = document.createElement("div");
            error.classList.add("error-msg");
            input.insertAdjacentElement("afterend", error);
        }
        error.textContent = mensaje;
    }

    // Limpiar errores
    function limpiarError(input) {
        input.classList.remove("error");

        const error = input.nextElementSibling;
        if (error && error.classList.contains("error-msg")) {
            error.remove();
        }
    }

    // Método de contacto (radios)
    document.querySelectorAll("input[name='metodo']").forEach((radio) => {
        radio.addEventListener("change", () => {
            const seleccionado = document.querySelector("input[name='metodo']:checked");
            document.getElementById("tdMetodo").textContent =
                seleccionado ? seleccionado.value : "—";
        });
    });

    // Suscripciones (checkboxes)
    document.querySelectorAll("input[name='suscripcion']").forEach((check) => {
        check.addEventListener("change", () => {
            const seleccionados = Array.from(
                document.querySelectorAll("input[name='suscripcion']:checked")
            ).map((el) => el.value);

            document.getElementById("tdSuscripcion").textContent =
                seleccionados.length > 0 ? seleccionados.join(", ") : "—";
        });
    });

    // Botón Leer Más
    const btn = document.getElementById("btnLeerMas");
    const cv = document.getElementById("cvCompleto");

    if (btn && cv) {
        btn.addEventListener("click", () => {
            const visible = cv.style.display === "block";
            cv.style.display = visible ? "none" : "block";
            btn.textContent = visible ? "Leer más" : "Leer menos";
        });
    }
});
