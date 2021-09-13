var n1 = 30;
var n2 = 20;
var test = 0;
if(n1 < n2) {
    console.log("n1 es menor n2");
}else{
    console.log("n1 mayor n2");
    test = suma();
}
n1 = 100;

console.log(n1);
console.log(test);

function suma(){    
    let resultado = n1 + n2;
    return resultado;
}


var elementos = [];
var elementos2 = Array();
var elementos3 = ["hola",1,8.5,true,5,7,8,9,10];
var elementos4 = [];

for(let i = 0; i < elementos3.length; i++){
    console.log(elementos3[i]);
}

for(let i = 0; i < elementos3.length; i++){
    console.log(elementos3[i]);
    elementos4.push(elementos3[i]);    
}
console.log(elementos4);

var palabra = "Hola Mundo";
var contenedor = [];
for (let i = 0; i < palabra.length; i++) {
    contenedor.push(palabra[i]);
}
console.log(contenedor);

var personas = {
    "nombre" : "Emmanuel",
    "apellido" : "Torres",
    "edad" : 26,
    "lenguajes":{
        "lenguaje1" : "JavaScript",
        "lenguaje2" : "PHP",
        "lenguaje3" : "C#"        
    },
    "Música": {
        "cancion1" : "La vida es bella",
        "cancion2" : "La vida es bella",
        "cancion3" : "La vida es bella",
        "genero":{
            "rock":"banda 1",
            "electronica": "dj1"
        }
    }
}
console.log(personas);
var oscaryBB = {
    "Datos Personales":{
        "nombre": "Oscary",
        "apellido P":"Basurto",
        "apellido M":"Basurto"
    },
    "Gustos":{
        "Musica":{
            "Rap": "Santa Fe",
            "Electronica": "skrillex",
            "Hip Hop": "Good day",
            "Salsa": "La sonora dinamita"
        },
        "Deporte":{
            "Futbol":"Messi",
            "Americano":"Raiders",
            "Béisbol": "New York"
        }
    },
    "Lenguajes":{
        "Programación":{
            "Java":"MNivel medio",
            "C#":"Nivel medio",
            "C++": "Nivel bajo"
        },
        "Programación web":{
            "HTML":"Nivel bajo",
            "CSS":"Nivel bajo"
        }

    }
}

console.log(oscaryBB);