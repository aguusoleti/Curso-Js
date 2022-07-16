const { BinarySearchTree } = require("../Checkpoint/09");

const miArbol1 = new BinarySearchTree(17);

miArbol1.insert(7);
miArbol1.insert(24);
miArbol1.insert(32);
miArbol1.insert(18);
miArbol1.insert(3);
miArbol1.insert(15);
miArbol1.insert(4);
miArbol1.insert(45);

const miArbol2 = new BinarySearchTree(89);

miArbol2.insert(17);
miArbol2.insert(28);
miArbol2.insert(35);
miArbol2.insert(20);
miArbol2.insert(34);
miArbol2.insert(84);
miArbol2.insert(88);
miArbol2.insert(55);

describe("Ejercicio 09 - searchPrice", () => {
  test("En caso de recibir por parámetro un precio igual o menor a 0 (cero), debe retornar el string 'Error'", () => {
    expect(miArbol1.searchPrice(0)).toEqual("Error");
    expect(miArbol1.searchPrice(-1)).toEqual("Error");
    expect(miArbol1.searchPrice(-10)).toEqual("Error");
  });
  test("En caso de encontrar el número buscando en el árbol, la función debe retornar true", () => {
    expect(miArbol1.searchPrice(7)).toEqual(true);
    expect(miArbol1.searchPrice(18)).toEqual(true);
    expect(miArbol1.searchPrice(3)).toEqual(true);
    expect(miArbol2.searchPrice(89)).toEqual(true);
    expect(miArbol2.searchPrice(55)).toEqual(true);
    expect(miArbol2.searchPrice(20)).toEqual(true);
  });
  test("En caso de NO encontrar el número buscando en el árbol, la función debe retornar false", () => {
    expect(miArbol1.searchPrice(8)).toEqual(false);
    expect(miArbol1.searchPrice(19)).toEqual(false);
    expect(miArbol1.searchPrice(31)).toEqual(false);
    expect(miArbol2.searchPrice(90)).toEqual(false);
    expect(miArbol2.searchPrice(56)).toEqual(false);
    expect(miArbol2.searchPrice(2)).toEqual(false);
  });
});
