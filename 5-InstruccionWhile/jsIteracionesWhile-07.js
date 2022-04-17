/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  var suma = 0;
  var NumeroIngresado;
  var resultado;
  var contador = 0;

  do {
    NumeroIngresado = parseInt(prompt("Ingresar un numero"));

    suma = suma + NumeroIngresado;

    resultado = prompt("desea ingresar otro numero? (s/n)?");
	contador ++
  } while (resultado == "s");


  document.getElementById("txtIdSuma").value = suma;
  document.getElementById("txtIdPromedio").value = suma / contador;
}
