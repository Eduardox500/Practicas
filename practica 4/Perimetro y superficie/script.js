var lado = prompt("Ingresa el lado del cuadrado");

document.write("<h1>El perimetro es: ", Perimetro(lado), "</h1>");

document.write("<h1>La superficie es: ", Superficie(lado), "</h1>");

function Perimetro(a) {
    return a * 4;
}

function Superficie(a) {
    return a * a;
}