function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla");
    //contenedor.innerHTML = "<h1>PROBANDO</h1>";
    let numero = 5;
    let contenido = "";
    
    for (let i=1; i<=10; i++){
        contenido = contenido + "<div class='fila'>" + numero + " x " + i + " = " + (numero*i) + "</div>";
        }
        contenedor.innerHTML = contenido;
}