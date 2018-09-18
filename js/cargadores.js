function cargadorModulo(objeto, modulo, archivo) {

        $("#" + objeto).load("modulos/" + modulo + "/" + archivo + ".html");

        console.log(archivo + " Cargado en el objeto " + objeto);
 
}

function cargarBarra(objeto, modulo, archivo) {
    $("#" + objeto).load("modulos/" + modulo + "/" + archivo + ".html");
    console.log("Barra de navegacion operativa")
}