const { devuelveMayores } = require("../Checkpoint/04");
const { LinkedList } = require("../DS");
const lista1 = new LinkedList();
lista1.add(5);
lista1.add(10);
lista1.add(8);
lista1.add(7);
lista1.add(14);
lista1.add(20);

const lista2 = new LinkedList();
lista2.add(99);
lista2.add(100);
lista2.add(81);
lista2.add(74);
lista2.add(14);
lista2.add(22);

describe("Ejercicio 04 - devuelveMayores", () => {
  test("La función debe retornar un valor numérico, que representa la CANTIDAD DE PRECIOS que superen el valor a evaluar", () => {
    expect(devuelveMayores(lista1, 10)).toEqual(2);
    expect(devuelveMayores(lista2, 50)).toEqual(4);
    expect(devuelveMayores(lista2, 10)).toEqual(6);
  });
  test("En caso de que ningún precio supere dicho valor, debe retornar el string 'Sin precios'", () => {
    expect(devuelveMayores(lista1, 1000)).toEqual("Sin precios");
    expect(devuelveMayores(lista2, 5000)).toEqual("Sin precios");
  });
});
