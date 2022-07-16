class Ascensor {
    cantidadPisos;
    pisoActual;
    filaLlamadas;
    moviendose;

    constructor (cantidadPisos) {
        this.cantidadPisos = cantidadPisos;
        this.pisoActual = 0; 
        this.filaLlamadas = []; //Si no seteas un piso tepea y se queda prendido el primer boton que toques.
        this.moviendose = false;
        
    }

    dibujarAscensor() {
        var ascensor = document.getElementById('ascensor');
        var siguientePiso = this.filaLlamadas[0];
        var posicion = (this.cantidadPisos * 100) - (siguientePiso * 100) - 100; 
        ascensor.style.top = `${posicion}px`;
    }

    iniciarAscensor () {
        var ascensor = document.getElementById('ascensor');
        var posicion = (this.cantidadPisos * 100) - 100
        ascensor.style.top = `${posicion}px`;
    }

    moverAscensor() {
        if (this.filaLlamadas.length === 0) {
            this.moviendose = false;
            return false;
        }
        this.moviendose = true;
        var siguientePiso = this.filaLlamadas[0];
        this.dibujarAscensor();
        this.filaLlamadas.splice(0, 1);

        var _this = this;
        setTimeout(function() {
            edificio.botonera.cambiarPantalla(siguientePiso);
            _this.moverAscensor()
        }, 4000)
    }

    agregarPiso(piso){
        if (this.filaLlamadas.length < 4 && !this.filaLlamadas.includes(piso)) {
            this.filaLlamadas.push(piso);
            if (!this.moviendose) {
                this.moverAscensor();
            }
            return true;
        }else{
            return false;
        }
    }
}