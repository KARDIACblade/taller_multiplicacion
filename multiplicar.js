function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla");
   
    let caja = document.getElementById("numeroUsuario");
       
    if  (caja.value===""){
            contenedor.innerHTML = "<p>Escribe un numero primero";
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

}