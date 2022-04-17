/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit
    var centigrados


    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value); 

    centigrados = (fahrenheit - 32) * 5/9 
    
    alert(`${fahrenheit} Fahrenheit son ${centigrados.toFixed(2)} centigrados`)

    document.getElementById("txtIdTemperatura").value = "";
}

function CentigradosFahrenheit () 
{
    var fahrenheit
    var centigrados


    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value); 

    fahrenheit = (centigrados * 9/5) + 32 
    
    alert(`${centigrados} Fahrenheit son ${fahrenheit.toFixed(2)} centigrados`)

    document.getElementById("txtIdTemperatura").value = "";
}

