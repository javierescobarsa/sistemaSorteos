var uno = {
    'monto': 0,
    'porcentaje': 0,
    'pulsos': 0,
    'tipo':'automatico',
    'ganador': 0
}
var dos = {
    'monto': 0,
    'porcentaje': 0,
    'pulsos': 0,
        'tipo':'automatico',
    'ganador': 0
}
var tres = {
    'monto': 0,
    'porcentaje': 0,
    'pulsos': 0,
        'tipo':'automatico',
    'ganador': 0
}
function modificarModal(premio,pulsos,porcentaje,tipo,ganador,llave) {
  
   localStorage.jackpoSeleccionado=llave;

    cargarDatosModal(premio, pulsos, porcentaje, tipo, ganador)

    $('#modificarJackpot').modal('show')
}

function cargarDatosModal(premio, pulsos, porcentaje, tipo, ganador) {

    $("#premioModal").val(premio)
    $("#pulsosModal").val(pulsos)
    $("#porcentajeModal").val(porcentaje)
console.log("ganador")
    $("#ganadorModal").val(ganador)
    if(tipo=="automatico"){
        contentCombo="<option value="+tipo+">"+tipo+" </option>"
        contentCombo+="<option value='manual'>Manual </option>"
        }else{
            contentCombo="<option value="+tipo+">"+tipo+" </option>"
            contentCombo+="<option value='automatico'>Automatico </option>"
        }
        
    $('#selectModal').html(contentCombo);

}

function guardarCambios(premio, pulsos,porcentaje,tipo,ganador) {
pulsos=parseInt(pulsos);
porcentaje=parseInt(porcentaje);
ganador=parseInt(ganador);
premio=parseInt(premio);
db.ref(rutaJackpot+localStorage.jackpoSeleccionado).update({
    monto:premio,
    pulsos:pulsos,
porcentaje:porcentaje,
tipo:tipo,
ganador:ganador
})


}

rutaJackpot="sistema/termometros/"
db.ref(rutaJackpot).orderByChild("num").on('value', function(datSort) {
contenido="";
    datSort.forEach(element => {
     console.log(element.val() )
contenido+=`

<tr>
<td>`+element.val().num+`</td>
<td>
    <p class="cajaTexto" >$`+puntuar(element.val().monto)+`</p>
</td>
<td>
    <p class="cajaTexto" >`+element.val().porcentaje+`%</p>
</td>
<td>
    <p class="cajaTexto" >`+element.val().pulsos+`</p>
</td>
<td>
    <i class="fas fa-bars" onclick="modificarModal('`+element.val().monto+`','`+element.val().porcentaje+`','`+element.val().pulsos+`','`+element.val().tipo+`','`+element.val().ganador+`','`+element.key+`')"></i>

</td>

</tr>
`



    });

console.log("asasasasaas")
    $("#cuerpoJackpot").html(contenido)

})