const { ingresoEmpleado } = require("../Checkpoint/10");

describe("Ejercicio 10 - ingresoEmpleado", () => {
  test("La función ingresoEmpleado debe retornar una nueva función", () => {
    expect(typeof ingresoEmpleado(9)).toBe("function")
    expect(typeof ingresoEmpleado(10)).toBe("function")
    expect(typeof ingresoEmpleado(11)).toBe("function")
  });
  test("La función retornada debe recibir un arreglo de empleados, y retornar un nuevo arreglo con los empleados que llegaron a horario", () => {
    expect(ingresoEmpleado(9)([{ nombre: "Jorge", ingresoA: 8 }])).toEqual([
      "Jorge",
    ]);
    expect(ingresoEmpleado(8)([{ nombre: "Mora", ingresoA: 9 }])).toEqual([]);
    expect(ingresoEmpleado(10)([{ nombre: "Mateo", ingresoA: 9 }])).toEqual([
      "Mateo",
    ]);
    expect(
      ingresoEmpleado(10)([
        { nombre: "Mateo", ingresoA: 9 },
        { nombre: "Jorge", ingresoA: 9 },
        { nombre: "Mora", ingresoA: 9 },
      ])
    ).toEqual(["Mateo", "Jorge", "Mora"]);
  });
});
