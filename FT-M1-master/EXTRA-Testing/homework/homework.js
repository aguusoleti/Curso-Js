function checkSeatStatus(variable,variable2) {
    
    const layout = [
        [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
        [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
        [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
        [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
        [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
      ];

      
      console.log('hola');
      if (typeof variable !== 'string') throw new TypeError ('First parameter is not a string')
      if(typeof variable2 !== 'number')throw new TypeError('Second parameter is not a number')
      

      const numberRow = getRowNumber(variable);
    const layoutRows = layout[numberRow];
    const seat = layoutRows[variable2];
    return seat.booked;
}
function getRowNumber(valor){
    return valor.charCodeAt(0)-65;
    
}

module.exports = {
  checkSeatStatus,
  getRowNumber
}