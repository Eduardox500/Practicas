var num1 = prompt("Escriba el primer numero");
var num2 = prompt("Escriba el segundo numero");


if (num2 == 0) {
    document.write("<h1>No se puede dividir entre cero</h1>");
} else {
    document.write("<h1>El resultado es ", num1 / num2, "</h1>");
}