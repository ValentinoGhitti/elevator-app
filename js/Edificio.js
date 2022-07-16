class Edificio {
    pisos;
    ascensor;
    botonera;
    constructor(cantidadDePisos) {
        this.pisos = [];
        this.botonera = new Botonera(cantidadDePisos);
        this.ascensor = new Ascensor(cantidadDePisos);
        
        for (var i = 0; i < cantidadDePisos ; i++) {
            var numeroDeImg = Math.round(Math.random()*7); 
            /* preguntar como se usa Math */
            this.pisos.push(`<div bg-dark class="pisos"><img src="./img/piso${numeroDeImg}.jpg" alt=""></div>`);
        }
    }
    generarPisos() {
        var contenedorDeEdificio = document.getElementById('edificio');
        var cadenaDePisos = this.pisos.reduce(function(acc, floor){
            return acc + floor;
        }, '');
        contenedorDeEdificio.innerHTML = cadenaDePisos;
        this.botonera.crearBotones();
        this.ascensor.iniciarAscensor();
    }
}