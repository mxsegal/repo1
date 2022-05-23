let autos = require('./autos');

let concesionaria = {
    autos: autos,
    buscarAuto: function(dominio){
        for (i = 0; i < autos.length ; i++){
            if (autos[i].patente == dominio){
                encontrado = autos[i];
                return encontrado
            } else {
                encontrado = null
            }
        } return encontrado
    },
    venderAuto: function(dominio){
        this.buscarAuto(dominio).vendido = true;
        return this.buscarAuto(dominio);
    },
    autosParaLaVenta: function(){
        let autosEncontrados = autos.filter(function(elemento){
            return elemento.vendido == false;
        });
        return autosEncontrados
    },
    autosNuevos: function(){
        listado = this.autosParaLaVenta().filter(function(elemento){
            return elemento.km < 100;
        });
        return listado
    },
    listaDeVentas: function(){
        listado = autos.filter(function(elemento){
            return elemento.vendido == true;
        }).map(function(elemento){
             return elemento.precio
        });
        return listado
    },
    totalDeVentas: function(){
        if(this.listaDeVentas().length == 0){
            suma = 0 
        } else {suma = this.listaDeVentas().reduce(function(acumulador,elemento){
            return acumulador + elemento
        })} return suma
    },
    puedeComprar: function(auto,persona){
        if((auto.precio <= persona.capacidadDePagoTotal) && ((auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas)){
            return true
        } else {
            return false
        }
    },
    autosQuePuedeComprar: function(persona){
        let aLaVenta = this.autosParaLaVenta();
        listado = [];
        for (i = 0; i < aLaVenta.length; i++){
            if(this.puedeComprar(aLaVenta[i],persona) == true){
                listado.push(aLaVenta[i])
            } 
        } return listado;
    },
}


/*
 let autoEncontrado = autos.filter(function(elemento){
            return elemento.patente == dominio;
        });
        return autoEncontrado ==[]? null : autoEncontrado;
    }, 


let guardar = function guardarTareas(tarea){
    let archivo = require('./funcionesDeTareas');
    let arrayTareas = archivo.leerArchivo();
    arrayTareas.push(tarea);
    return escribirJSON(arrayTareas);
}*/