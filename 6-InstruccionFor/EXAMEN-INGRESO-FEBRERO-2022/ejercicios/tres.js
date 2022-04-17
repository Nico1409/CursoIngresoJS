/*
Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:

- provincia: validar ("cordoba", "rio negro", "misiones")
- transporte: validar ("micro", "tren", "avion")
- precio: validar que no sea 0 o negativo

Si se viaja a misiones en avion, se hace un descuento del 10%
Si se viaja a cordoba en tren, se hace un descuento del 15%

A) Total recaudado (con y sin descuentos)
B) Total de plata perdida por realizar descuentos
C) Cantidad de estadias que tuvieron un descuento del 15% 
D) Promedio de precio de las estadias en rio negro
*/
function mostrar()
{
 var provincia;
 var transporte;
 var precio;
 var descuento = 1;
 var precioFinal = 0;
 var precioDescuento = 0;
 var cantDescuento = 0;
 var promedioRio = 0;
 var rio = 0;
 var precioTotal = 0;
 var perdida = 0;


 do {
     descuento = 1;
     precioDescuento = 0;
     precioFinal = 0;

    provincia = prompt("ingresar provincia a viajar").toLowerCase();

    while( provincia !="cordoba" && provincia !="rio negro" && provincia !="misiones"){

        provincia = prompt("ingresar provincia valida").toLowerCase();

    }

    transporte = prompt("ingresar transporte").toLowerCase();

    while( transporte !="micro" && transporte !="tren" && transporte !="avion"){

        transporte = prompt("ingresar transporte valido").toLowerCase();

    }

    precio = parseInt(prompt("ingresar precio"));

    while(precio <= 0){

        precio = parseInt(prompt("ingresar un precio valido"));

    }

switch (provincia) {
    case "cordoba":
        if(transporte == "tren"){
            descuento = 0.85;
        }
        break;
        
    case "misiones": 
    
    if(transporte == "avion"){
        descuento = 0.90;
    }
    break;

    case "rio negro":
        promedioRio += precio;
        rio ++
}

if(descuento == 0.85){

    cantDescuento ++
}


precioFinal = precio;
precioDescuento = precio;
precioFinal = precio * descuento;
perdida = precioDescuento - precioFinal;
precioTotal += precioDescuento;


 respuesta = prompt("quiere seguir ingresando datos?? (s/n)");    
 } while (respuesta == "s");


promedioRio /= rio;

if(isNaN(promedioRio)){
    promedioRio = 0;
}


alert(`El total recaudado es ${precioTotal}`);
alert(`La plata perdida por descuentos es de $${perdida}`);
alert(`Tuvieron un 15% de descuento ${cantDescuento} de personas`);
alert(`El promedio de precio en Rio Negro es de ${promedioRio}`)

}