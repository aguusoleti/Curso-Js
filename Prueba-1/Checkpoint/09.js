const { BinarySearchTree } = require("../DS");

// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// 9️⃣ ***** EJERCICIO 9 ***** - searchPrice() 9️⃣
// Implementar la función searchPrice dentro del prototipo de BynarySearchTree, que nos servirá para buscar un precio
// recibido por parámetro dentro de un BinarySearchTree que contendrá números que representan a los precios de una de
// las góndolas de Henry Market.
// 🟢 En caso de encontrar el precio recibido por parámetro, debe retornar true.
// 🟢 En caso de no encontrar dicho precio, debe retornar false.
// 🟢 En caso de recibir por parámetro un precio igual o menor a 0 (cero), debe retornar el string "Error"
//
// EJEMPLOS:
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
// arbolDePrecios.searchPrice(24) => true
// arbolDePrecios.searchPrice(4) => true
// arbolDePrecios.searchPrice(50) => false
// arbolDePrecios.searchPrice(1) => false
// arbolDePrecios.searchPrice(0) => "Error"
// arbolDePrecios.searchPrice(-10) => "Error"

BinarySearchTree.prototype.searchPrice = function (precio) {
    // Tu código aquí

    if(precio<=0)return 'Error'

    if(this.value === precio){
		return true;
	}
	if(precio <= this.value && this.left !== null){
		return this.left.searchPrice(precio);
	}else if(precio > this.value && this.right !== null){
		return this.right.searchPrice(precio)
	}else{
		return false;
	}
  
};


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
 BinarySearchTree
};