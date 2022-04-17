/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo()
 {
  var largoTerreno;     
  var anchoTerreno;
  var total;

  largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
  anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);

  alambre = (largoTerreno + anchoTerreno) *2;
  total =  alambre * 3;

  alert(`Se necesita ${total} mts de alambre`)

  document.getElementById("txtIdLargo").value = "";
  document.getElementById("txtIdAncho").value = "";
}

function Circulo() 
{
 var radio;
 var alambre;
 var total;
 const pi = Math.PI;

 radio = parseFloat(document.getElementById("txtIdRadio").value);

alambre = 2 * pi * radio; 
total = alambre * 3;

alert(`se necesita ${total.toFixed(2)} mts de alambre`)

}
function Materiales()
 {
   var largoTerreno;
   var anchoTerreno;
   var areaTerreno;
   var bolsaCemento;
   var bolsaCal;

   bolsaCal = 3;
   bolsaCemento = 2;
   largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
   anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);


   areaTerreno = largoTerreno * anchoTerreno; 
   bolsaCal = areaTerreno * bolsaCal;
   bolsaCemento = areaTerreno * bolsaCemento;

   alert(`usted necesita ${bolsaCemento} bolsas de cemento y ${bolsaCal} bolsas de cal`);

 }
