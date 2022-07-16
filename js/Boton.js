class Boton{
    id;
    numero;
    activo;
    
    constructor(id) {
        this.id = id;
        this.numero = id === 0? 'PB' : id;
        this.activo = false;
    }

    cambiarEstadoBoton(estado) {
        console.log(this);
        this.activo = estado;
        var contenedor = document.getElementById(`contenedor-${this.id}`)
        contenedor.innerHTML = `
        <button 
            class="${this.activo? 'active' : ''}" 
            onclick = "edificio.botonera.apretarBoton(${this.id})"
        > ${this.numero} </button>`
    }

    apretarBoton() {
        var estado = edificio.ascensor.agregarPiso(this.id)
        this.cambiarEstadoBoton(estado);
    }
}