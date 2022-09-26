'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise(executor) {
    if (typeof executor !== 'function') throw new TypeError('executor function')
    this._state = 'pending';
    this._handlerGroups = [];
    executor(this._internalResolve.bind(this), this._internalReject.bind(this));
}
$Promise.prototype._internalResolve = function (value) {
    if (this._state === 'pending') {
        this._state = 'fulfilled';
        this._value = value;
        this._callHandlers();
    }
};
$Promise.prototype._internalReject = function (value) {

    if (this._state === 'pending') {
        this._state = 'rejected'
        this._value = value;
        this._callHandlers();
    }
};
$Promise.prototype.then = function (successCb, errorCb) {
    if (typeof successCb !== 'function') {successCb = null;}
    if (typeof errorCb !== 'function') {errorCb = null;}
    this._handlerGroups.push({ successCb, errorCb })
    if(this._state!== 'pending') this._callHandlers();
};
$Promise.prototype._callHandlers= function(){
while(this._handlerGroups.length > 0){
    let current= this._handlerGroups.shift(); 
    if(this._state ==='fulfilled'){
        current.successCb && current.successCb(this._value);
    }else if(this._state ==='rejected'){
        current.errorCb && current.errorCb(this._value);
    }
}

}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
