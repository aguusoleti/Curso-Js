const { henryParking } = require("../Checkpoint/01");
const { Queue } = require("../DS");

describe("Ejercicio 01 - henryParking", () => {
  test("La función debe retornar la QUEUE resultante de procesar los movimientos", () => {
    expect(henryParking([23, 43, "OUT", 65])).toEqual({ array: [43, 65] });
    expect(henryParking([23, "OUT", 65])).toEqual({ array: [65] });
    expect(henryParking([23, 43, "OUT", "OUT", 65])).toEqual({ array: [65] });
    expect(henryParking([23, 43, 55, "OUT", "OUT", 65])).toEqual({
      array: [55, 65],
    });
  });
  test("Si la función intenta retirar un vehículo cuando la Queue se encuentra vacía, debe retornar false", () => {
    expect(henryParking(["OUT"])).toEqual(false);
    expect(henryParking([23, "OUT", "OUT"])).toEqual(false);
    expect(henryParking([23, 43, "OUT", "OUT", "OUT"])).toEqual(false);
    expect(henryParking([23, 43, 55, "OUT", "OUT", "OUT", "OUT"])).toEqual(
      false
    );
  });
  test("La Queue retornada debe ser instancia de la clase Queue", () => {
    expect(henryParking([23, 43, "OUT", 65]) instanceof Queue).toEqual(true);
    expect(henryParking([23, "OUT", 65]) instanceof Queue).toEqual(true);
  });
});
