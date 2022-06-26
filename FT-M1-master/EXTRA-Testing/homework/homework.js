function checkSeatStatus(variable,variable2) {
    
    const layout = [
        [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
        [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
        [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
        [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
        [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
      ];

if (typeof variable !== 'string'){
    throw new TypeError ('First parameter is not a string')
}

if(typeof variable2 !== 'number')
{
    throw new TypeError('Second parameter is not a number')
}

}
function getRowNumber(valor){
    return valor.charCodeAt(0)-65;
    
    // if (valor.charCodeAt(0) - 65 === 0)
    // {
    //     return 0
    // }else if (valor.charCodeAt(0) - 65 === 2){
    //     return 2
    // }
}
module.exports = {
  checkSeatStatus,
  getRowNumber
}