/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
 var sexo = "";


sexo = prompt("ingrese un sexo entre f o m");

while (sexo != "f" && sexo != "m") {


sexo = prompt("ingrese un sexo entre f o m valido");

	
}

if (sexo == "f"){

    sexo = "Femenino"

}else {
	sexo = "masculino"
}



document.getElementById("txtIdSexo").value = sexo;

}