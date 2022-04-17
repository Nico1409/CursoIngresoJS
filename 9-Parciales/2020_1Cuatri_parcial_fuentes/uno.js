
function mostrar()
{
var tipo;
var precio;
var unidades;
var marca;
var fabricante;





for (let i = 0; i > 5; i++) {
	
	tipo = prompt("ingresar un tipo valido").toLowerCase;

	while (tipo != "jabon" && tipo != "barbijo" && tipo != "alcohol") {
		
		tipo = prompt("ingresar un tipo valido").toLowerCase;

	}
	

	precio = parseFloat(prompt("ingresar un precio"));


	while (precio < 100 || precio >300) {

		precio = parseFloat(prompt("ingresar un precio valido")); 
		
	}

    unidades = parseInt(prompt("ingresar unidades"));

	while (unidades <= 0 || unidades >= 1000) {

		unidades = parseInt(prompt("ingresar unidades"));
	}

    marca = prompt("ingresar marca");
	fabricante = prompt("ingresar fabricante");

	if (flag == 0){

		if (tipo == "alcohol"){

			unidadesBaratas = unidades;
			fabricanteBarato = fabricante;
			flag == 1;
		}
	} elseif (tipo == "alcohol" );
	{
	 unidadesBaratas = unidades;
	 fabricanteBarato = fabricante;
	}
 
 if (unidades > unidadesPromedio){


 }


 if (tipo == "jabon"){
    jabon = unidades;
	jabonTotal += jabon;
 }
 
 document.write("<br> La suma de los negativos es : " + sumaDeNegativos);
 document.write("<br> La suma de los positivos es : " + sumaDePositivos);
 document.write("<br> La cantidad de postivos es : " + cantidadPositivos);
 document.write("<br> La cantidad de negativos es : " + cantidadNegativos);
 document.write("<br> La cantidad de ceros es : " + cantidadCeros);
 document.write("<br> La cantidad de numeros pares es : " + cantidadPares);
 document.write("<br> El numero maximo es : " + numeroMaximo);
 document.write("<br> El numero minimo es : " + numeroMinimo);

}












}
