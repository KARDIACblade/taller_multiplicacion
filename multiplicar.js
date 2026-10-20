function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla");
   
    let caja = document.getElementById("numeroUsuario");

    let mensajeAyuda = document.getElementById("mensajeAyuda");
     
    // [MODIFICADO] Validación mejorada con .trim() para evitar espacios en blanco
    if  (caja.value.trim() ==="") {
            contenedor.innerHTML = "<p>Escribe un numero primero";

            // [NUEVO] Cambiamos el texto de ayuda inferior a rojo para alertar al usuario
        if (mensajeAyuda) {
            mensajeAyuda.style.color = "#ff4949";
            mensajeAyuda.textContent = "¡Debes escribir un número válido!";
            }
            return;
    }
        
    //contenedor.innerHTML = "<h1>PROBANDO</h1>";
    let numero = Number(caja.value);
    let contenido = "";
    
    for (let i=1; i<=10; i++){
        contenido = contenido + "<div class='fila'>" + numero + " x " + i + " = " + (numero*i) + "</div>";
        }
        contenedor.innerHTML = contenido;

        document.getElementById("tituloNumero").innerHTML=numero;

        // [NUEVO] Restablecemos o actualizamos el texto de ayuda cuando el cálculo es exitoso
    if (mensajeAyuda) {
        mensajeAyuda.style.color = "#7c8aa5";
        mensajeAyuda.textContent = "¡Tabla del " + numero + " generada con éxito!";
    }    

}


// ==========================================
// [NUEVO] ATAJO DE TECLADO: Presionar ENTER
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    let caja = document.getElementById("numeroUsuario");
    if (caja) {
        caja.addEventListener("keypress", function(event) {
            // Si la tecla presionada es "Enter", ejecutamos la función automáticamente
            if (event.key === "Enter") {
                generarTablas();
            }
        });
    }
});