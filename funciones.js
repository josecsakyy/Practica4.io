function realizarCalculo() {
    // Obtener los valores ingresados por el usuario
    var nombre1 = document.getElementById("nombre1").value;
    var gasto1 = parseInt(document.getElementById("gasto1").value);
    var gasto2 = parseInt(document.getElementById("gasto2").value);
    var operacion = document.getElementById("operacion").value;

    // Validar gastos no negativos
    if (gasto1 < 0 || gasto2 < 0) {
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "Error: Los montos a pagar no pueden ser negativos.";
        return;
    }

    // Realizar la operación seleccionada
    var resultado;
    switch (operacion) {
        case "suma":
            resultado = gasto1 + gasto2;
            break;
        case "porcentaje1":
            resultado = (gasto1 / (gasto1 + gasto2)) * 100;
            break;
        case "porcentaje2":
            resultado = (gasto2 / (gasto1 + gasto2)) * 100;
            break;
        default:
            resultado = "Operación inválida";
    }

    // Mostrar el resultado en la página
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Resultado: " + resultado;
}

function obtenerIdiomaSeleccionado() {
    // Obtener los idiomas seleccionados
    var idiomasSeleccionados = [];
    if (document.getElementById("idioma1").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma1").value);
    }
    if (document.getElementById("idioma2").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma2").value);
    }
    if (document.getElementById("idioma3").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma3").value);
    }
    if (document.getElementById("idioma4").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma4").value);
    }
    if (document.getElementById("idioma5").checked) {
        idiomasSeleccionados.push(document.getElementById("idioma5").value);
    }
    
    // Mostrar el anuncio del idioma seleccionado
    var resultadoDiv = document.getElementById("resultado1");
    if (idiomasSeleccionados.length > 0) {
        resultadoDiv.innerHTML = "Idiomas seleccionados: " + idiomasSeleccionados.join(", ");
    } else {
        resultadoDiv.innerHTML = "No se ha seleccionado ningún idioma.";
    }
}


function borrarDatos() {
    document.getElementById("nombre1").value = "";
    document.getElementById("gasto1").value = "";
    document.getElementById("gasto2").value = "";
    document.getElementById("operacion").selectedIndex = 0;

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    var resultadoDiv1 = document.getElementById("resultado1");
    resultadoDiv1.innerHTML = "";
}
