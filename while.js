var numeroNatural=0;
var acumulador=0;
var control=0
numeroNatural=prompt("Ingrese el número natural que quiere sumar")

while (control<=numeroNatural) {
    acumulador = acumulador+control;
    control=control+1;
 
}
alert("La suma de los " +numeroNatural + " primeros números naturales es igual a " +acumulador)