var numeroSolicitado=0;
var opcion;
var factorial=1;
do {
    opcion = parseInt(prompt("Elija una opción del menu: 1. Calcular Factorial 2. Determinar si es par 3. Terminar"))
    switch (opcion) {
        case 1:
            numeroSolicitado = parseInt(prompt("Ingrese el número al que le va a calcular el factorial"));
            for (let i = 1; i <= numeroSolicitado; i++) {
               factorial=factorial*i;
                
            }
            alert(factorial + " es el factorial de " +numeroSolicitado);
            break;
        case 2:
            numeroSolicitado = parseInt(prompt("Ingrese el número que determinará si es par"));
            if ((numeroSolicitado % 2)==0) {
                alert(numeroSolicitado + " es par")
            } else {
                alert(numeroSolicitado + " es impar")
            }
            break;
       }
} while (opcion != 3);