// 2️⃣ ***** EJERCICIO 2 ***** - calcularIndice() 2️⃣
// En este ejercicio, debemos implementar la función calcularIndice, la debe retornar
// un valor numérico que es parte de una secuencia de números que representa los índices
// de precios que se aplicarán en Henry Market en cada año de actividad.
// La función recibirá por parámetro el año de actividad del supermercado (valor númérico 0 o mayor),
// y calculará el índice en base a la siguiente secuencia:
//
// - Para el año 0 (n=0) de actividad, el índice es de 15
// - Para el año 1 (n=1) de actividad, el índice es 25
// - A partir del año 2, el índice se calcula con la fórmula f(n-1)+f(n-2)
//
// EJEMPLOS:
// - calcularIndice(0) => 15
// - caluclarIndice(1) => 25
// - calcularIndice(2) => calcularIndice(2-1) + calcularIndice(2-2) => 40
// - calcularIndice(3) => calcularIndice(3-1) + calcularIndice(3-2) => 65
//
// REQUISITOS:
//  🟢 La función debe obtener el índice hallando de forma recursiva el valor correspondiente a n dentro de la secuencia.
//  🟢 La función debe retornar el valor numérico correspondiente a n dentro de la secuencia.
//  🟢 Si el valor de n recibido por parámetro es menor a 0, debe retornar false.

const calcularIndice = (n) => {
 if (n<0)return false
  if(n===0) return 15

  if(n===1) return 25
  
    // if(n===1 || n===0 )return n
    // console.log(n)
    return  calcularIndice(n-1)+calcularIndice(n-2)

    
}


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  calcularIndice
};
