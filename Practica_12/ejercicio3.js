// Función para frenar el coche, atendiendo a restricciones
function frenar(coche, decrementoVelocidad) {
    // Si el decremento es excesivo o excede la velocidad actual
    if (decrementoVelocidad <= 0 || decrementoVelocidad > coche.velocidad) {
      // Mensaje de confirmación
      console.log("El decremento de velocidad es inválido"); // Mensaje de confirmación
      return;
    }
    else if (this.velocidad - decrementoVelocidad <= 0) {
      // Si el decremento es demasiado alto
      console.log("El decremento de velocidad es demasiado alto, el coche se detendrá."); // Mensaje si el decremento es demasiado alto
      console.log("El decremento de velocidad debe ser mayor a 0."); // Mensaje de error si el decremento es inválido
    }
    else {
      // Si el decremento es válido
      coche.velocidad -= decrementoVelocidad; // Se decrementa la velocidad actual
    }
  }
  // Función para mostrar la información del coche
  function mostrarInformacion(coche) {
    console.log("Coche: " + coche.marca + " " + coche.modelo + ", Velocidad actual: " + coche.velocidad + " km/h"); // Mensaje mostrando la información del coche
  }
  // Crear una instancia de la clase Coche con marca y modelo iniciales
  const coche = new Coche("Toyota", "Corolla");
  // Mostrar información inicial del coche
  mostrarInformacion(coche);
  // Acelerar el coche en 20 km/h
  coche.acelerar(20); // Ejecuta el método acelerar
  // Mostrar información del coche
  mostrarInformacion(coche);
  // Frenar el coche en 20 km/h
  frenar(coche, 20); // Ejecuta el método frenar
  // Mostrar información del coche
  mostrarInformacion(coche);
  // Intentar frenar el coche en 15 km/h (decremento inválido)
  frenar(coche, 15); // Ejecuta el método frenar, mostrando un mensaje si el decremento es demasiado alto
  // Mostrar información del coche
  mostrarInformacion(coche);

  //
  // Le hace falta al codigo en el pdf
  //
  
  