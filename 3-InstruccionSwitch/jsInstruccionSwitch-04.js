function mostrar() {
  var mesDelAño;

  mesDelAño = document.getElementById("txtIdMes").value;

  switch (mesDelAño) {
    case "Febrero":
      mensaje = "este mes tiene 28 dias";
      break;
    case "Junio":
    case "Abril":
    case "Septiembre":
    case "Noviembre":
      mensaje = "este mes tiene 30 dias";
      break;

    default:
      mensaje = "este mes tiene 31 dias";
      break;
  }

  alert(mensaje);
}
