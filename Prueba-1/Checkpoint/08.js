const { BinarySearchTree } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// 8️⃣ ***** EJERCICIO 8 ***** - searchMax() 8️⃣
// Implementar la función searchMax dentro del prototipo de BynarySearchTree, que nos servirá para buscar el precio
// máximo que se encuentra dentro de un BinarySearchTree que contendrá números que representan a los precios de una
// de las góndolas de Henry Market.
//
// EJEMPLO:
//  - En caso de que nuestro árbol de precios sea el siguiente:
//
//             17
//          /      \
//        7         24
//      /  \       /   \
//     3    15    18    32
//    / \                 \
//       4                45
//
// Deberá retornar 45.

BinarySearchTree.prototype.searchMax = function () {
  // Tu código aquí:
  if(this.right !== null){
		return this.right.searchMax()
  }
  return this.value
};
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
    BinarySearchTree
};
