class Sujeto {
    constructor() {
        this.observadores = []; 
    }

    
    suscribir(observador) {
        this.observadores.push(observador);
    }

    
    desuscribir(observador) {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    
    notificar(datos) {
        this.observadores.forEach(observador => observador.actualizar(datos));
    }
}

class Observador {
    constructor(nombre) {
        this.nombre = nombre;
    }

    
    actualizar(datos) {
        console.log(`${this.nombre} ha recibido la notificación con los datos: ${datos}`);
    }
}


const sujeto = new Sujeto();

const observador1 = new Observador('Observador 1');
const observador2 = new Observador('Observador 2');


sujeto.suscribir(observador1);
sujeto.suscribir(observador2);


sujeto.notificar('Primer mensaje');


sujeto.desuscribir(observador1);


sujeto.notificar('Segundo mensaje');
