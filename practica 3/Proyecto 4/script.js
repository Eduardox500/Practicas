var letra = prompt("Escriba una letra para saber si es una vocal, consonante o signo")

if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
    document.write("<h1>", letra, " es una vocal", "</h1>");
} else {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        document.write("<h1>", letra, " es una vocal", "</h1>");
    } else {
        document.write("<h1>", letra, " No es una vocal", "</h1>");
    }
}