
 termotroUno={
    porcentaje:0,
    monto:0
}
 termometroDos={
    porcentaje:0,
    monto:0
}
 termometroTres={
    porcentaje:0,
    monto:0
}
 rutaSorteoUno="sistema/sorteos/uno/"
 rutaSorteoDos="sistema/sorteos/dos/"
 rutaSorteoTres="sistema/sorteos/tres/"

// ruta sorteo uno
db.ref(rutaSorteoUno).orderByValue().on('value', function(datSort) {
      console.log("Sorteo numero :"+datSort.key+" Cargado!")
     datUno=datSort.val();
      termotroUno={
        porcentaje:datUno.monto,
        monto:datUno.porcentaje
    }
    if(datUno.porcentaje>90){
        console.log("Mayor con 90");
        color="rgba(236, 44, 44, 0.7)"
        console.log("mayor que 90");
           porReventar('divTermometroUno');
        }else{
        if(datUno.porcentaje>65){
            console.log("mayor que 65");
            color="rgba(250, 250, 250, 0.75)"
                 rebotar('divTermometroUno');

            setTimeout(() => {
                quitarEfectos('divTermometroUno');   
            }, 1000);
        }else{
            console.log("menor que 65 ");
            color="rgba(250, 250, 250, 0.75)"
                     rebotar('divTermometroUno');

            setTimeout(() => {
                quitarEfectos('divTermometroUno');   
            }, 1000);
        }
        
        
        }
    construirTermometro("divTermometroUno",datUno.porcentaje,datUno.monto,color);
})
db.ref(rutaSorteoDos).orderByValue().on('value', function(datSort) {
    console.log("Sorteo numero :"+datSort.key+" Cargados!")
   datDos=datSort.val();
  termometroDos={
      porcentaje:datDos.monto,
      monto:datDos.porcentaje
  }
if(datDos.porcentaje>90){
console.log("Mayor con 90222");
color="rgba(236, 44, 44, 0.7)"
   porReventar('divTermometroDos');
}else{
if(datDos.porcentaje>65){
    console.log("mayor que 65");
    color="rgba(250, 250, 250, 0.75)"
         rebotar('divTermometroDos');

            setTimeout(() => {
                quitarEfectos('divTermometroDos');   
            }, 1000);
}else{
    console.log("menor que 65 ");
    color="rgba(250, 250, 250, 0.75)"
             rebotar('divTermometroDos');

            setTimeout(() => {
                quitarEfectos('divTermometroDos');   
            }, 1000);
}


}
 

  construirTermometro("divTermometroDos",datDos.porcentaje,datDos.monto,color);
})
db.ref(rutaSorteoTres).orderByValue().on('value', function(datSort) {
      console.log("Sorteo numero :"+datSort.key+" Cargado!")
     datTres=datSort.val();
    termometroTres={
        porcentaje:datTres.monto,
        monto:datTres.porcentaje
    }


    if(datTres.porcentaje>90){
        console.log("Mayor con 90");
        color="rgba(236, 44, 44, 0.7)"
        porReventar('divTermometroTres');

     
        }else{
        if(datTres.porcentaje>65){
            console.log("mayor que 65");
            color="rgba(250, 250, 250, 0.75)"
            rebotar('divTermometroTres');

            setTimeout(() => {
                quitarEfectos('divTermometroTres');   
            }, 1000);
        }else{
            console.log("menor que 65 ");
            color="rgba(250, 250, 250, 0.75)"
            rebotar('divTermometroTres');

            setTimeout(() => {
                quitarEfectos('divTermometroTres');   
            }, 1000);
        }
        
        
        }
        
    construirTermometro("divTermometroTres",datTres.porcentaje,datTres.monto,color);
})


function construirTermometro(termometro,porcentaje,monto,color){
contenido=`
<strong class="anim-silver-glow display-1" style="font-size:100px; color:rgba(255, 255, 255, 0.4);">$`+puntuar(monto)+`</strong>
<div class="donation-meter mx-auto" style=" width:300px; height:1200px;">
  
  <strong class="goal mx-auto anim-silver-glow"  style="font-size:80px;">100%</strong>
  <span class="glass mx-auto" > 
      <strong class="total mx-auto " style="bottom: 5%; font-size:40px;"></strong>
      <span class="amount mx-auto" style="height: `+porcentaje+`%;"></span>
  </span>
  <div class="bulb mx-auto" style="">
      <span class="red-circle mx-auto"> </span>
      <span class=" mx-auto anim-silver-glow mx-auto" style="font-size:100px; left:-40px; position:relative;">
      `+porcentaje+`%
      </span>
  </div>
</div>
`;
$('#'+termometro).html(contenido)

}


function rebotar(termometro){
    $('#'+termometro).attr('class','col-sm-4 mx-auto animated infinite bounce')
    
    
}

function quitarEfectos(termometro){
    $('#'+termometro).attr('class','col-sm-4 mx-auto ')
}


function porReventar(termometro){
    $('#'+termometro).attr('class','col-sm-4 mx-auto animated infinite shake')
}

