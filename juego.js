function jugar(eleccionUsuario) {
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionPc = opciones[Math.floor(Math.random() * opciones.length)];

    document.getElementById("eleccion-usuario").textContent =
        "Tu: " + eleccionUsuario.toUpperCase();

    document.getElementById("eleccion-pc").textContent =
        "Bot: " + eleccionPc.toUpperCase();

    let resultado = "";

    if (eleccionUsuario === eleccionPc) {
        resultado = "¡Empate!";
    } else if (
        (eleccionUsuario === "piedra" && eleccionPc === "tijera") ||
        (eleccionUsuario === "papel" && eleccionPc === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionPc === "papel")
    ) {
        resultado = "¡Ganaste!";
    } else {
        resultado = "Perdiste ";
    }

    document.getElementById("resultado").textContent = resultado;
}
