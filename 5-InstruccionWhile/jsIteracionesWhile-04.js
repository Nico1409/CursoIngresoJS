/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
  var numero;

  numero = prompt("Ingresar un numero del 0 al 9");

while (numero <= 0 || numero >= 9) {
  
alert(`su numero no es valido, ingrese otro numero`)

numero = prompt("Ingresar un numero del 0 al 9");
   
	
}

document.getElementById("txtIdNumero").value = numero 

}