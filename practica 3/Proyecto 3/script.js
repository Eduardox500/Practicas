var num1 = prompt("Escriba el primer numero");
var num2 = prompt("Escriba el segundo numero");
var num3 = prompt("Escriba el tercer numero");

if (num1 == num2 && num1 == num3) {
    document.write("<h1>todos son iguales</h1>");
} else {
    if (num1 > num2 && num1 > num3) {
        document.write("<h1>", num1, " es el mayor", "</h1>");
    } else {
        if (num2 > num1 && num2 > num3) {

            document.write("<h1>", num2, " es el mayor", "</h1>");
        } else {
            document.write("<h1>", num3, " es el mayor", "</h1>");
        }
    }

}