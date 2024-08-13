function crearVehiculo(tipo) {
    switch (tipo) {
        case 'auto':
            return new Auto();
        case 'motocicleta':
            return new Motocicleta();
        default:
            throw new Error(`Tipo de vehículo desconocido: ${tipo}`);
    }
}

class Auto {
    constructor() {
        this.ruedas = 4;
    }
    conducir() {
        console.log('Conduciendo el auto...');
    }
}

class Motocicleta {
    constructor() {
        this.ruedas = 2;
    }
    conducir() {
        console.log('Conduciendo la motocicleta...');
    }
}

const auto = crearVehiculo('auto');
auto.conducir(); 

const motocicleta = crearVehiculo('motocicleta');
motocicleta.conducir(); 
