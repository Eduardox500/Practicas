var n1 = prompt("Escriba el primer numero")
var n2 = prompt("Escriba el segundo numero")

console.log(n1);
console.log(n2);

if (n2==0) {
    document.write("<h1>No se puede dividir entre cero</h1>");
}
else{
    document.write("<h1>El resultado es ",n1/n2,"</h1>");
}