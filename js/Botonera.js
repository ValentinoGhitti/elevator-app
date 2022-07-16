class Botonera{
    pisoActual;
    direccion;
    botones;

    constructor(cantidadPisos){
        this.botones = [];
        for(var i = cantidadPisos - 1 ; i >= 0; i--){
            this.botones.push(new Boton(i))
        }
    }

    crearBotones(){
        var botonHtml = '';
        this.botones.forEach(function(boton){
            
            botonHtml +=
                `
                <div class="contenedorBoton" id="contenedor-${boton.id}">
                    <button 
                        class="${boton.activo? 'active' : ''}"
                        onclick = "edificio.botonera.apretarBoton(${boton.id})"
                    > ${boton.numero} </button>
                </div> 
                `
        });
        var contenedorBotones = document.getElementById('btn');
        contenedorBotones.innerHTML = botonHtml;

    }

    apretarBoton(idBoton) {
        var boton = this.botones.find(function(boton) {
            return boton.id === idBoton;
        })
        
        boton.apretarBoton();
    }
    cambiarPantalla(nuevoPiso){
        if (this.pisoActual > nuevoPiso) {
            this.direccion = 'down';
        } else {
            this.direccion = 'up';
        }
        this.pisoActual = nuevoPiso;
        var muestraActual = 
            `
            <h2 class="${this.direccion}">
                ${this.pisoActual === 0? 'PB' : this.pisoActual}
            </h2>
            `;
        var pantalla = document.getElementById('pantalla');
        pantalla.innerHTML = muestraActual;
        var boton = this.botones.find(function(boton) {
            return boton.id === nuevoPiso;
        })
        boton.cambiarEstadoBoton(false);
    }

    
}