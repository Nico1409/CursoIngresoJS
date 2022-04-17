function mostrar()
{
 var i = 1;
 var suma = 0;
 var numeroIngresado = 0;

while (i <= 5 ) {
 
	numeroIngresado = parseInt(prompt("ingresado"));
    suma = suma + numeroIngresado;	
	i++
}

promedio = suma / 5;

document.getElementById("txtIdSuma").value = suma
document.getElementById("txtIdPromedio").value = promedio 
}