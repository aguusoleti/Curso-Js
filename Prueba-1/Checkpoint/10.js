// 1️⃣0️⃣  EJERCICIO 10  ingresoEmpleado 1️⃣0️⃣
// Implementar la función ingresoEmpleado que servirá para registrar el ingreso de los empleados del Henry Market,
// apuntando aquellos que hayan llegado a horario.
// IMPORTANTE! Los horarios serán números enteros (9,10,11,12), NO tendrán formato hora (09:00, 10:00, etc)
//
// La función ingresoEmpleado debe retornar la función ingresosHorario, la cual recibirá un arreglo de empleados que ingresan
// al supermercado con la siguiente forma:
// let empleados =  [
//    {nombre:"Jorge", ingresoA: 9}
//    {nombre:"Mora", ingresoA: 8}
//    {nombre:"Mati", ingresoA: 10}
//    {nombre:"Juani", ingresoA: 7}
//  ]
//, y retornará un nuevo arreglo con LOS NOMBRES de aquellos que se hayan presentado antes del horario de ingreso.
//
// Ejemplo 
//  const ingresosHorario =  ingresoEmpleado(9)
//  Si ejecuto ingresosHorario(empleados) me daria de resultado ["Jorge"]

function ingresoEmpleado(horario) {

        return function (array) {
          let temprano = [];
          for (let i = 0; i < array.length; i++) {
            if (array[i].ingresoA < horario) {
              temprano.push(array[i].nombre);
            }
          }
          return temprano;
        };
      }




// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
    ingresoEmpleado
};
