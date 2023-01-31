iniciarJuego = () =>
{
   let botonMascota = document.getElementById("seleccionarMascota");
   botonMascota.addEventListener("click", seleccionarMascota);
}
seleccionarMascota = () =>
{
   let mascotas = {
      hipodoge: {
         seleccionado: document.getElementById("hipodoge").checked
      },
      capipepo: {
         seleccionado: document.getElementById("capipepo").checked
      },
      ratigueya: {
         seleccionado: document.getElementById("ratigueya").checked
      }
   }
   
   if(mascotas.hipodoge.seleccionado){
      alert("Elegiste hipodoge");
   }
   else if(mascotas.capipepo.seleccionado){
      alert("Elegiste capipepo");
   }
   else if(mascotas.ratigueya.seleccionado)  {
      alert("Elegiste ratigueya");
   }
   else {
      alert("Mucha Bestia !!! seleccione una puta mascota");
   }

  // let mascotas = [document.getElementById("hipodoge").checked , document.getElementById("capipepo").checked, document.getElementById("ratigueya").checked ]
   
   // for (let index = 0; index < mascotas.length; index++) {
   //    if(mascotas.valor)
   //    {
   //       alert("Elegiste " + mascotas.index);  
   //    }
   // }

}


window.addEventListener("click", iniciarJuego);