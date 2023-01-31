var ataqueJugador = 0;
var ataqueEnemigo = 0;
const rulesGame = {
   1: {
          3: true,
          2: false,
          1: false
      },     
   2: {
          1: true,
          3: false,
          2: false
      },
   3: {
          2: true,
          1: false,
          3: false
      }
}
var vidasJugador = 3;
var vidasEnemigo = 3;
var optionsGame = ["POLLO CABRON", "FUEGO","AGUA","TIERRA"];
iniciarJuego = () => 
{
    /*    ataques.forEach((valor, indice) =>
    {     ataques[indice].addEventListener("click", ataqueFuego);
    })   */
   let buttonMascotas = document.getElementById("seleccionarMascota");
   buttonMascotas.addEventListener("click",seleccionMascotaJugador);
   let nodelist = document.querySelectorAll("#seleccionar-ataque button");
   console.log(nodelist);
   let ataques = [].slice.call(nodelist);
   console.log(ataques);
   ataques[0].addEventListener("click", ataqueFuego);
   ataques[1].addEventListener("click", ataqueAgua);
   ataques[2].addEventListener("click", ataqueTierra);
}
seleccionMascotaJugador = (enemigo) => 
{
   // querySelectorAll genera un nodelist con todos los elementos similares 
   let nodelist = document.querySelectorAll("#seleccionar-mascota input");
   console.log(nodelist);
   var inputMascotas = [].slice.call(nodelist);
   console.log(inputMascotas)
   // Convertimos el nodelist en un array(nombresMascotas) 
   var nombresMascotas = ["Hipodoge","Capipepo","Ratigueya"];
   var spanMascotaJugador = document.getElementById("mascota-jugador");
   //forEach es el metodo de recorrer un arreglo.
   inputMascotas.forEach((valor, indice) => 
   {
      if(valor.checked) 
      {  
         spanMascotaJugador.innerHTML= ` ${nombresMascotas[indice]}`;
         enemigo == true;
       
            seleccionarMascotaEnemigo(aleatorio(0,3));
         
      }
   })
}

seleccionarMascotaEnemigo = (pc) =>
{
   var nombresMascotas = ["Hipodoge","Capipepo","Ratigueya"];
   var spanMascotaEnemigo = document.getElementById("mascota-enemigo");
   nombresMascotas.forEach((valor, indice) => 
   {
      if(indice == pc)
      {  
         spanMascotaEnemigo.innerHTML= ` ${nombresMascotas[indice]}`;
      }
   })
}

ataqueFuego = () =>
{
   ataqueJugador = 1
   ataqueEnemigo = aleatorio(1, 3);
   crearMensaje();
}
ataqueAgua = () =>
{
   ataqueJugador = 2
   ataqueEnemigo = aleatorio(1, 3);
   crearMensaje();
}
ataqueTierra = () =>
{
   ataqueJugador = 3
   ataqueEnemigo = aleatorio(1, 3);
   crearMensaje();
}
crearMensaje = () =>
{
   let sectionMensaje = document.getElementById("mensajes");
   let parrafo = document.createElement("p");
   let spanVidaJugador = document.getElementById("vida-jugador");
   let spanVidaEnemigo = document.getElementById("vida-enemigo");
   if(rulesGame[ataqueJugador][ataqueEnemigo])
   {
      parrafo.innerHTML = "Tu mascota atacó con " + optionsGame[ataqueJugador] + ", las mascota del enemigo atacó con " +optionsGame[ataqueEnemigo] + " GANASTE";
      sectionMensaje.appendChild(parrafo);
      vidasEnemigo--
      spanVidaEnemigo.innerHTML = vidasEnemigo
   }
   else if(ataqueJugador==ataqueEnemigo)
   {
      parrafo.innerHTML = "Tu mascota atacó con " + optionsGame[ataqueJugador] + ", las mascota del enemigo atacó con " +optionsGame[ataqueEnemigo] + " EMPATE";
      sectionMensaje.appendChild(parrafo);
   }  
   else
   {
      parrafo.innerHTML = "Tu mascota atacó con " + optionsGame[ataqueJugador] + ", las mascota del enemigo atacó con " +optionsGame[ataqueEnemigo] + " PERDISTE";
      sectionMensaje.appendChild(parrafo);
      vidasJugador--
      spanVidaJugador.innerHTML = vidasJugador
   }
   console.log(vidasEnemigo, vidasJugador)
   estadisticas();
}

aleatorio = (min, max) =>
{
   return Math.floor(Math.random() * (max - min + 1) + min);
}

estadisticas =() =>
{
   let sectionMensaje = document.getElementById("mensajes");
   let parrafo = document.createElement("p");
   if(vidasEnemigo == 0)   
   {
      parrafo.innerHTML = "GANASTE PERRA"
      sectionMensaje.appendChild(parrafo);
   }
   else if(vidasJugador == 0)
   {
      parrafo.innerHTML = "PERDISTE PERRA"
      sectionMensaje.appendChild(parrafo);
   }
}
/*
ataque = () =>
{
   let nodelist = document.querySelectorAll("#seleccionar-ataque button");
   ataques.forEach((valor, indice) =>
   {
      if(valor.click)
      {
         console.log(valor);
      }
   })
   console.log("nepe");
}
*/
window.addEventListener("load", iniciarJuego)
