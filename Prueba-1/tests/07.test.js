const { ordenarPrecios } = require("../Checkpoint/07");

describe("Ejercicio 07 - ordenarPrecios", () => {
  test("En caso de recibir un 0 (cero) dentro del array, la función debe retornar false", () => {
    expect(ordenarPrecios([20, 15, 0, 10, 5])).toEqual(false);
    expect(ordenarPrecios([0, 15, 10, 5])).toEqual(false);
    expect(ordenarPrecios([5, 15, 10, 0])).toEqual(false);
  });
  test("Debe retornar un array con los precios ordenados", () => {
    expect(ordenarPrecios([20, 15, 45, 10, 5])).toEqual([5, 10, 15, 20, 45]);
    expect(ordenarPrecios([20, 15, 55, 10, 1])).toEqual([1, 10, 15, 20, 55]);
    expect(ordenarPrecios([20, 21, 55, 10, 5])).toEqual([5, 10, 20, 21, 55]);
  });
});
