let autos = require('./autos');

const concesionaria = {
    buscarPatente: function(dominio){
        let autoEncontrado = autos.filter(function(elemento){
            return elemento.patente == dominio;
        });
        if (autoEncontrado = []){
            return null
        } else {
            return autoEncontrado
        }
    } 
}


console.log(concesionaria.buscarPatente('KKJ16'));


/*let guardar = function guardarTareas(tarea){
    let archivo = require('./funcionesDeTareas');
    let arrayTareas = archivo.leerArchivo();
    arrayTareas.push(tarea);
    return escribirJSON(arrayTareas);
}*/