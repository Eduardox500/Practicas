var num1 = prompt("Ingrese el primer numero");
var num2 = prompt("Ingrese el segundo numero");
var num3 = prompt("Ingrese el tercer numero");

document.write("<h1>El mayor de los tres es ", Mayor(num1, num2, num3), ".</h1>");

function Mayor(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else {
        if (b > a && b > c) {
            return b;
        } else {
            return c;
        }
    }
}