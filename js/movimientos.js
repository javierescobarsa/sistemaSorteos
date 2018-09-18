contador=0;
function girarMaquinas(tiempo){
let counter = setInterval(giro, tiempo);
}	
function giro(){

    console.log("Maquina :"+ listadoMaquinas[contador]);
  
    if(contador>=listadoMaquinas.length-1){
        console.log("contador mayor que el valor de listado de maquina actual")
        contador=0;
    }else{
        console.log("contador menor que el valor de listado de maquina actual")
        contador++;
    }

    return listadoMaquinas[contador];
  
}

