

const estrategiaTarjeta = {
    pagar: function(monto) {
      console.log(`Pagando ${monto} con tarjeta`);
    }
  };
  
  const estrategiaPaypal = {
    pagar: function(monto) {
      console.log(`Pagando ${monto} con PayPal`);
    }
  };
  
  const estrategiaEfectivo = {
    pagar: function(monto) {
      console.log(`Pagando ${monto} en efectivo`);
    }
  };
  
  
  class Pago {
    constructor(estrategia) {
      this.estrategia = estrategia;
    }
  
    realizarPago(monto) {
      this.estrategia.pagar(monto);
    }
  }
  
  
  const pagoTarjeta = new Pago(estrategiaTarjeta);
  pagoTarjeta.realizarPago(100); a
  
  const pagoPaypal = new Pago(estrategiaPaypal);
  pagoPaypal.realizarPago(200); 
  
  const pagoEfectivo = new Pago(estrategiaEfectivo);
  pagoEfectivo.realizarPago(50); 