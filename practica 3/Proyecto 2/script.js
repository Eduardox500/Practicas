var Cnumeros = 2
// var Cnumeros = prompt("cantidad de numeros");
var num = [];
var Contador_Positivo = 0;
var Contador_Negativo = 0;
var Respuesta_positiva = [];
var Respuesta_negativa = [];


for (let index = 0; index < Cnumeros; index++) {
    num[index] = prompt("ingresa un numero");
}

for (let index = 0; index < Cnumeros; index++) {
    if (num[index] > 0) {
        Respuesta_positiva[Contador_Positivo] = num[index];
        Contador_Positivo++;
    } else {
        Respuesta_negativa[Contador_Negativo] = num[index];
        Contador_Negativo++;
    }
}

if (Contador_Positivo == 0) {
    document.write("<h1>La cantidad de numeros positivos es 0");
} else {
    document.write("<h1>La cantidad de numeros positivos es ", Contador_Positivo, " y son: ");
    for (let index = 0; index < Respuesta_positiva.length; index++) {
        document.write(Respuesta_positiva[index], " ");
    }
    document.write("</h1>");
}

if (Contador_Negativo == 0) {
    document.write("<h1>La cantidad de negativos positivos es 0");
} else {
    document.write("<h1>La cantidad de numeros negativos es ", Contador_Negativo, " y son: ");
    for (let index = 0; index < Respuesta_negativa.length; index++) {
        document.write(Respuesta_negativa[index], " ");
    }
    document.write("</h1>");
}