class CuentaBancaria {
    constructor(titular, saldo) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    // Método estático
    static tipoDeCuenta() {
      return 'Cuenta de Ahorros';
    }
  
    imprimirInfo() {
      console.log(`Titular: ${this.titular}, Saldo: $${this.saldo}`);
    }
  }
  
  const cuenta1 = new CuentaBancaria('Yancy', 2500);
  cuenta1.imprimirInfo(); 
  console.log(CuentaBancaria.tipoDeCuenta()); 