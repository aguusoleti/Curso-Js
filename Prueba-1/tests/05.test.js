const { cobrarClientes } = require("../Checkpoint/05");
const { Queue } = require("../DS");
const clientes1 = new Queue();
const clientes3 = new Queue();

clientes1.enqueue({
  nombre: "Jorge",
  dinero: 1500,
  precioProductos: 1000,
});

clientes1.enqueue({
  nombre: "Mateo",
  dinero: 2000,
  precioProductos: 1900,
});

clientes1.enqueue({
  nombre: "Mora",
  dinero: 5000,
  precioProductos: 5800,
});

clientes3.enqueue({
  nombre: "Jorge",
  dinero: 1500,
  precioProductos: 1000,
});

clientes3.enqueue({
  nombre: "Mateo",
  dinero: 2000,
  precioProductos: 1900,
});

clientes3.enqueue({
  nombre: "Mora",
  dinero: 5000,
  precioProductos: 10,
});

describe("Ejercicio 05 - cobrarClientes", () => {
  test("En caso de encontrarse con un cliente que no tiene dinero suficiente, debe dejar de evaluar clientes y retornar el array de los clientes que fueron quitados de la Queue", () => {
    expect(cobrarClientes(clientes1)).toEqual(["Jorge", "Mateo"]);
  });
  test("En caso de quedarse sin clientes en la queue, debe retornar false", () => {
    expect(cobrarClientes(clientes3)).toEqual(false);
  });
});
