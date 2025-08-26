document.getElementById("btnMensaje").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        document.getElementById("mensaje").innerText = "⚠️ Por favor ingrese su nombre.";
    } else {
        document.getElementById("mensaje").innerText = "¡Hola " + nombre + "! Bienvenido a mi proyecto.";
    }
});
