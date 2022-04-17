function mostrar() {
  var estacionIngresada;
  var destinoIngresado;
  var mensaje;

  estacionIngresada = document.getElementById("txtIdEstacion").value;
  destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (estacionIngresada) {
    case "Invierno":
      switch (destinoIngresado) {
        case "Bariloche":
          mensaje = "se viaja";
          break;
        default:
          mensaje = "no se viaja";
          break;
      }
      break;

    case "Verano":
      switch (destinoIngresado) {
        case "Mar del plata":
        case "Cataratas":
          mensaje = "se viaja";
          break;
        default:
          mensaje = "no se viaja";
          break;
      }
      break;

    case "Otoño":
      mensaje = "se viaja ";
      break;

    case "Primavera":
      switch (destinoIngresado) {
        case "Bariloche":
          mensaje = "no se viaja";
          break;

        default:
          mensaje = "se viaja";
          break;
      }
      break;
  }

  alert(mensaje);
}
