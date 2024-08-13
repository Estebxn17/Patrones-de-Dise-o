
const utilidadesMatematicas = (function() {
    let variablePrivada = 0; 
  
    function sumar(a, b) {
      return a + b;
    }
  
    function multiplicar(a, b) {
      return a * b;
    }
  
    
    return {
      sumar: sumar,
      multiplicar: multiplicar
    };
  })();
  
 
  console.log(utilidadesMatematicas.sumar(2, 3)); 
  console.log(utilidadesMatematicas.multiplicar(4, 5)); 
  
  
  console.log(utilidadesMatematicas.variablePrivada);