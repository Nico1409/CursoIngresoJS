/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

//  */
// function CalcularPrecio() {
//   var lamparas;
//   var marca;
//   var precioFinal;
//   var ingresosBrutos;

//   marca = document.getElementById("Marca").value;
//   lamparas = document.getElementById("txtIdCantidad").value;
//   precioFinal = lamparas * 35;

//   if (lamparas >= 6) {
//     precioFinal = precioFinal * 0.5;
//   }

//   if (lamparas == 5 && marca == "ArgentinaLuz") {
//     precioFinal = precioFinal * 0.6;
//   } else if (lamparas == 5) {
//     precioFinal = precioFinal * 0.7;
//   }

//   if (lamparas == 4) {
//     if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
//       precioFinal = precioFinal * 0.75;
//     } else {
//       precioFinal = precioFinal * 0.8;
//     }
//   }

//   if (lamparas == 3) {
//     if (marca == "ArgentinaLuz") {
//       precioFinal = precioFinal * 0.85;
//     } else if (marca == "FelipeLamparas") {
//       precioFinal = precioFinal * 0.9;
//     } else {
//       precioFinal = precioFinal * 0.95;
//     }
//   }

//   if (precioFinal > 120) {
//     ingresosBrutos = precioFinal * 0.1;
//     precioFinal = precioFinal + ingresosBrutos;

//     alert(`IIBB Usted pago ${ingresosBrutos} pesos`);
//   }

//   document.getElementById("txtIdprecioDescuento").value =
//     precioFinal.toFixed(2);
// }


function CalcularPrecio() {
  var lamparas;
  var marca;
  var precioFinal;
  var ingresosBrutos = 0.1;
  var descuento;

  marca = document.getElementById("Marca").value;
  lamparas = document.getElementById("txtIdCantidad").value;
  precioFinal = lamparas * 35;

 if (lamparas >= 6 ) {
   
  descuento = 0.5

 }

 if (lamparas == 5){

  switch (marca) {
    case "ArgentinaLuz":
      descuento = 0.6;
      break;
  
    default:
      descuento = 0.7;
      break;
  }
 }

 if (lamparas == 4){
   
  switch (marca) {
    case "ArgentinaLuz":
    case "FelipeLamparas":
      descuento = 0.75
      break;
  
    default:
      descuento = 0.8
      break;
  }
 }

  if(lamparas == 3){
    switch(marca){

      case "ArgentinaLuz":
        descuento = 0.85;
        break;

      case "FelipeLamparas":
        descuento = 0.9;
        break;

        default:
          descuento = 0.95;
          break;
    }
  }
  
  precioFinal = precioFinal * descuento;
 

  if (precioFinal >= 120) {
    
    ingresosBrutos = ingresosBrutos * precioFinal;
    precioFinal = ingresosBrutos + precioFinal;
    alert(ingresosBrutos);

  

  }
 
  document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);
 

 

}