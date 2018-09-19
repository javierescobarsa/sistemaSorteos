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
function modificarModal(premio,tipo,ganador,llave) {
  
   localStorage.jackpoSeleccionado=llave;
    cargarDatosModal(premio, tipo, ganador)
    $('#modificarsorteos').modal('show')
}

function cargarDatosModal(premio, tipo, ganador) {
    $("#premioModal").val(premio)
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

function guardarCambios(premio,tipo,ganador) {

db.ref(rutasorteos+localStorage.jackpoSeleccionado).update({
    monto:premio,

tipo:tipo,
ganador:ganador
})


}

rutasorteos="sistema/sorteos/"
db.ref(rutasorteos).orderByChild("num").on('value', function(datSort) {
contenido="";
    datSort.forEach(element => {
     console.log(element.val() )
contenido+=`

<tr>
<td>`+element.val().num+`</td>
<td>
    <p class="cajaTexto" >`+element.val().monto+`</p>
</td>
<td>
    <p class="cajaTexto" >`+element.val().tipo+`</p>
</td>
<td>
    <p class="cajaTexto" >`+element.val().ganador+`</p>
</td>
<td>
    <i class="fas fa-bars" onclick="modificarModal('`+element.val().monto+`','`+element.val().tipo+`','`+element.val().ganador+`','`+element.key+`')"></i>

</td>

</tr>
`



    });

console.log("asasasasaas")
    $("#cuerposorteos").html(contenido)

})