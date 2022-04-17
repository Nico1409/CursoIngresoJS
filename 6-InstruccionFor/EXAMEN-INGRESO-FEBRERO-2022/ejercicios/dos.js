/*
De una compra debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:

- categoria: validar ("cereales", "lacteos", "bebidas")
- calorias: validar que no sea 0 o negativo
- sin tacc: validar ("si", "no")
- pais de origen: validar ("brasil", "eeuu", "resto del mundo")

A) Promedio de calorias de los lacteos
B) Cantidad de bebidas brasileñas que son sin tacc
C) La categoria y pais de origen del producto con menos calorias
*/
function mostrar()
{
    var categoria;
    var calorias;
    var tacc;
    var pais;
    var respuesta;
    var promedio = 0;
    var lacteos = 0;
    var flag = 0;
    var caloriasMenor = 0;
    var categoriaMenor;
    var paisMenor;
    var bebidasBrasil = 0;

    do {
        categoria = prompt("ingresar una categoria").toLowerCase();

        while( categoria !="cereales" && categoria !="lacteos" && categoria !="bebidas"){

            categoria = prompt("ingresar una categoria valida").toLowerCase();
        }

        calorias = parseInt(prompt("ingrese las calorias"));

        while( calorias <= 0){

            calorias = parseInt(prompt("ingrese calorias validas"));

        }

        tacc = prompt("ingresar si es con tacc (si/no)").toLowerCase();

        while (tacc != "si" && tacc !="no") {

            tacc = prompt("ingresar si es con tacc (si/no)").toLowerCase();
            
        }

        pais = prompt("ingresar pais de origen").toLowerCase();

        while( pais !="brasil" && pais !="eeuu" && pais !="resto del mundo"){

            pais = prompt("ingresar pais de origen valido").toLowerCase();

        }


        if(categoria == "lacteos"){
            
            promedio += calorias
            lacteos ++
        }

        if(pais == "brasil"){

            if(tacc == "si" && categoria == "bebidas"){
                bebidasBrasil ++
            }
        }


        if(flag == 0){

            if(calorias > caloriasMenor){
                caloriasMenor = calorias;
                categoriaMenor = categoria;
                paisMenor = pais;
                flag = 1;
            }
        } else
        {
            
        if (calorias < caloriasMenor){
        
            caloriasMenor = calorias;
                categoriaMenor = categoria;
                paisMenor = pais;
        }
        }


        respuesta = prompt("quiere ingresar mas datos?? (s/n)").toLowerCase();
    } while (respuesta == "s");


  

    promedio /= lacteos; 

    if(isNaN(promedio)){
        promedio = 0;
    }

    alert(`El promedio de las calorias en los lacteos es de ${promedio}`);
    alert(`La cantidad de bebidas brasileñas que no tienen tacc es ${bebidasBrasil}`);
    alert(`Del producto con menos calorias la categoria es ${categoriaMenor} y el pais de origen es ${paisMenor}`);


}