var palabra = prompt("Escribe la palabra a daivinar");
var count = 0;
var noElementos = palabra.length;
var noIntentos = 2;
var rango = 0;

while (noIntentos >= 0 && count < noElementos) { 
    var letra = prompt("Introduce una letra");
    var busqueda = 0;

    for (let i = 0; i < noElementos.length; i++) {
        if (letra == palabra[i]) {
            count++;
            busqueda = 1;
        }
        
    }

    if (busqueda == 1) {
        console.log("La letra es igual");
    }
    else{
        if(noIntentos == 0) {
            console.log("Perdiste");
            estatus = 1;
            break;
        }
        else{
            console.log("La letra no es igual");
            noIntento--;
        }
    }
}

if (rango == 0) {
    console.log("¡GANASTE!");

}else{
    console.log("¡PERDISTE!");
}
