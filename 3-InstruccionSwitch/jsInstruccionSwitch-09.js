function mostrar() {
  var estacionIngresada;
  var destinoIngresado;
  var porcentaje;
  var precioFinal = 15000;

  estacionIngresada = document.getElementById("txtIdEstacion").value;
  destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (estacionIngresada) {
    case "Invierno":
      switch (destinoIngresado) {
        case "Bariloche":
          porcentaje = 1.2;
          break;
        case "Mar del plata":
          porcentaje = 0.8;
          break;
        case "Cataratas":
        case "Cordoba":
          porcentaje = 0.9;
          break;
      }
      break;

    case "Verano":
      switch (destinoIngresado) {
        case "Bariloche":
          porcentaje = 0.8;
          break;
        case "Mar del plata":
          porcentaje = 1.2;
          break;
        case "Cataratas":
        case "Cordoba":
          porcentaje = 1.1;
          break;
      }
      break;

    case "Otoño":
    case "Primavera":
      switch (destinoIngresado) {
        case "Bariloche":
        case "Mar del plata":
        case "Cataratas":
          porcentaje = 1.1;
          break;
      }
      break;
  }

  precioFinal = precioFinal * porcentaje;

  alert(`su precio final es de $${precioFinal}`);
}
