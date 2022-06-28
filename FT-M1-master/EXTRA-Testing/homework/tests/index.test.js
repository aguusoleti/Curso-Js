const { checkSeatStatus,
        getRowNumber, } = require('../homework');
        describe ('checkSeatStatus' , ()=>{
        it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
});

it('should throw a TypeError if first parameter is not a string', () => {
  expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
});
it('el segundo parametro no es un numero', () => {
    expect(() => checkSeatStatus('4','b')).toThrow(new TypeError('Second parameter is not a number'));
  });

  it('la fila A la segunda columna está reservada', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
  });
  it('la cuarta columna de la última fila no', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
  });
})
describe('getrowNumber', ()=>{
it('Espera la fila A asociada a la posicion 0', () => {
    expect(getRowNumber('A')).toBe(0)
});
it('Espera la fila A asociada a la posicion 0', () => {
    expect(getRowNumber('B')).toBe(1)
});
it('Espera la fila C asociada a la posicion 2', () => {
    expect(getRowNumber('C')).toBe(2)
});
})



  