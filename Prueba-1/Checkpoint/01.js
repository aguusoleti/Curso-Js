const { Queue } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// 🛒 HENRY MARKET 🛒
// En el día de inauguración del nuevo supermercado Henry Market, estamos encargados
// del correcto funcionamiento de los programas de cada una de las computadoras que
// realizan las distintas tareas en el negocio.
//
// Cada uno de los ejercicios nos pedirá implementar una función en la que utilizaremos
// lo aprendido en este módulo.
// Leer atentamente cada uno de los enunciados y guiarse por los ejemplos!
//
//
//
//
// 1️⃣ ***** EJERCICIO 1 ***** - henryParking() 1️⃣
// Implementar la función henryParking, que nos permitirá organizar los movimientos de
// los vehículos del estacionamiento de Henry Market.
// La función recibirá por parámetro un array que representa en orden las entradas
// y salidas de vehículos que se producen en el estacionamiento, y deberá crear
// una QUEUE, donde iremos registrando los ingresos y egresos.
//
// El array de movimientos tendrá la siguiente forma:
//
// [23, 43, "OUT", 65, "OUT", 32, 55, "OUT"] , donde cada número representa el ingreso
// de un vehículo al que se le asigna dicho valor; y cada "OUT" representa la salida
// del vehículo que lleva más tiempo dentro del estacionamiento.
// Finalmente, la función debe retornar la QUEUE que representa el estado del estacionamiento
// al momento de finalizar los eventos del array.
//
// EJEMPLOS:
//
//  - henryParking([23, 43, "OUT", 65]) => Queue [43, 65]
//      - Ingresó vehículo 23. [23] 🔺
//      - Ingresó vehículo 43. [23, 43] 🔺
//      - Egresó vehículo 23.  [43] 🔻
//      - Ingresó vehículo 65. [43, 65] 🔺
//
// REQUISITOS:
//  🟢 La función debe retornar la QUEUE resultante de procesar los movimientos.
//  🟢 Si la función intenta retirar un vehículo cuando la Queue se encuentra vacía,
//    debe retornar false
//  🟢 ATENCIÓN! La QUEUE que retorna la función debe ser una instancia de la clase QUEUE.

function henryParking(arr) {
  // Tu código aquí:
    //if (!arr) return false;
    let queue = new Queue();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 'OUT') queue.array.push(arr[i]);
      if (arr[i] === 'OUT') {
        if (queue.array.length === 0) return false;
        queue.array.shift();
      }
    }
    return queue;
    
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  henryParking
};