const { apilarCajas } = require("../Checkpoint/03");
const { Stack } = require("../DS");

describe("Ejercicio 03 - apilarCajas", () => {
  test("En caso de recibir un array vacío, debe retornar el string 'Error'", () => {
    expect(apilarCajas([])).toEqual("Error");
  });
  test("El Stack que retorna debe ser una instancia de la clase Stack", () => {
    expect(
      apilarCajas([
        { nombre: "leche", peso: 30 },
        { nombre: "fideos", peso: 15 },
      ]) instanceof Stack
    ).toEqual(true);
  });
  test("La función debe crear y retornar el Stack creado con las cajas de productos recibidas en el array", () => {
    expect(
      apilarCajas([
        { nombre: "leche", peso: 30 },
        { nombre: "fideos", peso: 15 },
      ])
    ).toEqual({ array: ["leche", "fideos"] });
    expect(
      apilarCajas([
        { nombre: "gaseosa", peso: 40 },
        { nombre: "arroz", peso: 5 },
      ])
    ).toEqual({ array: ["gaseosa", "arroz"] });
  });
  test("En caso de exceder el peso máximo permitido, debe retornar en string 'No se puede crear la pila'", () => {
    expect(
      apilarCajas([
        { nombre: "leche", peso: 30 },
        { nombre: "fideos", peso: 25 },
      ])
    ).toEqual("No se puede crear la pila");
    expect(
      apilarCajas([
        { nombre: "gaseosa", peso: 40 },
        { nombre: "arroz", peso: 5 },
        { nombre: "otro", peso: 10 },
      ])
    ).toEqual("No se puede crear la pila");
  });
});
