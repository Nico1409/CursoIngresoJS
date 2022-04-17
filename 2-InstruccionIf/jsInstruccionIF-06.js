function mostrar()
{
	var edad
    var mensaje = " "

edad = document.getElementById("txtIdEdad").value;
 
if(edad < 13)
{
  mensaje = mensaje + "usted es un niño"
}
else if (edad >=13 && edad <= 17)
{
	mensaje = mensaje + "usted es adolescente"
}
else 
{
	mensaje = mensaje + "usted es mayor de edad"
}


alert(mensaje);
}