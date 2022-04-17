/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  var precioUno;
  var precioDos;
  var precioTres;
  var total;

  precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
  precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
  precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

  total = precioUno + precioDos + precioTres;

  alert(total);

  document.getElementById("txtIdPrecioUno").value = "";
  document.getElementById("txtIdPrecioDos").value = "";
  document.getElementById("txtIdPrecioTres").value = "";
}
function Promedio() {
  var precioUno;
  var precioDos;
  var precioTres;
  var total;

  precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
  precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
  precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

  total = (precioUno + precioDos + precioTres) / 3;

  alert(total);

  document.getElementById("txtIdPrecioUno").value = "";
  document.getElementById("txtIdPrecioDos").value = "";
  document.getElementById("txtIdPrecioTres").value = "";
}
function PrecioFinal() {
  var precioUno;
  var precioDos;
  var precioTres;
  var total;

  precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
  precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
  precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

  total = (precioUno + precioDos + precioTres) * 1.21;


  alert(total.toFixed(2));

  document.getElementById("txtIdPrecioUno").value = "";
  document.getElementById("txtIdPrecioDos").value = "";
  document.getElementById("txtIdPrecioTres").value = "";
}
