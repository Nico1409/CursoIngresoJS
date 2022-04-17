/*
De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:

- apellido
- obra social: validar ("osde", "galeno", "otra")
- sintomas: validar ("alergia", "dolor corporal", "nauseas", "otro")
- dias con sintomas: validar que no sea 0 o negativo

A) Cantidad de personas que presentaron dolor corporal o nauseas
B) Cuantas personas con galeno presentaron alergia durante mas de 2 dias
C) Apellido de la persona que tuvo mayor cantidad de dias con sintomas
*/
function mostrar()
{
    var apellido;
    var obraSocial;
    var sintomas;
    var dias;
    var personas=0;
    var personas2=0;
    var diasMayor=0;
    var apellidomayor="";
    
    
    for (let i = 0; i < 2; i++) {
        
        apellido = prompt("ingresar apellido");
    
        obraSocial = prompt("ingresar obra social").toLowerCase();
    
        while( obraSocial!="osde" && obraSocial!="galeno" && obraSocial!="otra"){
    
            obraSocial = prompt("ingresar obra social valida").toLowerCase();
    
        }
    
        sintomas = prompt("ingresar sintomas").toLowerCase();
    
        while( sintomas!="alergia" && sintomas!="dolor corporal" && sintomas!="nauseas" &&  sintomas !="otro"){

            sintomas = prompt("ingresar sintomas validos").toLowerCase();

        }

        dias = prompt("ingresar dias con sintomas");

        while(dias <= 0){

            dias = prompt("ingreas dias con sintomas validos");
        }
        
    
        if (sintomas == "dolor corporal" || sintomas =="nauseas"){

            personas ++;
        }


        if (obraSocial =="galeno" && sintomas == "alergia" && dias > 2){
            personas2 ++;
        }

        if(dias > diasMayor){

            apellidomayor = apellido;
            diasMayor = dias;

        }

    }

    alert(`Cantidad de personas que presentaron  dolor corporal o nauseas es ${personas}`);
    alert(`Cantidad de personas con obra social galeno que presentaron alergia durante mas de 2 dias es ${personas2}`);
    alert(`el apellido de la persona que tuvo mayor cantidad de dias con sintomas es ${apellidomayor}`);
    
    
    
}
