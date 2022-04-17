function mostrar() {
  var destinoIngresado;
  var mensaje;

  destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (destinoIngresado) {
    case "Cataratas":
      mensaje = "en su destino hace calor";
      break;

    case "Ushuaia":
      mensaje = "en su destino hace frio";
      break;

    case "Bariloche":
      mensaje = "en su destino hace frio";
      break;

    case "Mardel":
      mensaje = "en su destino hace calor";
      break;
  }

  alert(mensaje);
}
