function mostrar() {
  var destinoIngresado;

  destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (destinoIngresado) {
    case "Cataratas":
      mensaje = "su destino esta al norte";
      break;

    case "Ushuaia":
      mensaje = "su destino esta al sur";
      break;

    case "Bariloche":
      mensaje = "su destino esta al oeste";
      break;

    case "Mardel":
      mensaje = "su destino esta al este";
      break;
  }

  alert(mensaje);
}
