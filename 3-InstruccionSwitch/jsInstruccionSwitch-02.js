function mostrar() {
  //tomo el mes
  var mesDelAño;
  var mensaje;

  mesDelAño = document.getElementById("txtIdMes").value;

  switch (mesDelAño) {
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
      mensaje = "Falta para el invierno";
      break;

    case "Julio":
    case "Agosto":
      mensaje = "Abrigate que hace frio";
      break;

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
      mensaje = "Ya paso el frio, ahora calor!!!";
      break;
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
