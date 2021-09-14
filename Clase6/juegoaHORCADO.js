var palabra = prompt("Escribe la palabra a daivinar");
var count = 0;
var noElementos = palabra.length;
var noIntentos = 2;
var rango = 0;
while (noIntentos >= 0 && count < noElementos) { 
    var letra = prompt("Introduce una letra");
    if (palabra[count] == letra) {
        console.log("La letra es igual");
        count++;
    }
    else{
        if(noIntentos == 0) {
            console.log("Perdiste");
            rango = 1;
            break;
        }
        else{
            console.log("La letra no es igual");
            noIntento--;
        }
    }
}
console.log(rango);
if (rango== 0) {
    console.log("PALABRA CORRECTA");
}
else{
    console.long("PERDISTE- SIGUE INTENTANTO")
}