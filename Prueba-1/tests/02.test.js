const { calcularIndice } = require('../Checkpoint/02');
describe("Ejercicio 02 - calcularIndice", () => {
  let n
  let data = {
    0:15,
    1:25,
    2:40,
    3:65,
    4:105,
    5:170,
    6:275,
    7:445,
    8:720,
    9:1165,
  }
  beforeEach(()=>{
    n = Math.floor(Math.random() * 10)
  })

  test("La función debe obtener el índice hallando de forma recursiva el valor correspondiente a n dentro de la secuencia", () => {
    expect(calcularIndice(2)).toEqual(40);
    expect(calcularIndice(n)).toEqual(data[n]);
  });
  test("La función debe obtener el índice hallando de forma recursiva el valor correspondiente a n dentro de la secuencia", () => {
    expect(calcularIndice(3)).toEqual(65);
    expect(calcularIndice(n)).toEqual(data[n]);
  });
  test("Si el valor de n recibido por parámetro es menor a 0, debe retornar false", () => {
    expect(calcularIndice(-1)).toEqual(false);
    expect(calcularIndice(-2)).toEqual(false);
    expect(calcularIndice(-3)).toEqual(false);
  });
});
