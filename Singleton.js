class Singleton {
    static instance;
  
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  
    
    foo() {
      console.log("Hola, soy el patron de diseño Singleton!");
    }
  }
  
  const singleton1 = new Singleton();
  const singleton2 = new Singleton();
  
  console.log(singleton1 === singleton2); 
  
  singleton1.foo(); 
  singleton2.foo(); 