const { BinarySearchTree } = require("../Checkpoint/08");

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

miArbol2.insert(7);
miArbol2.insert(28);
miArbol2.insert(35);
miArbol2.insert(20);
miArbol2.insert(34);
miArbol2.insert(84);
miArbol2.insert(88);
miArbol2.insert(55);

describe("Ejercicio 08 - searchMax", () => {
  test("La función debe retornar el número máximo dentro del árbol", () => {
    expect(miArbol1.searchMax()).toEqual(45);
    expect(miArbol2.searchMax()).toEqual(89);
  });
});
