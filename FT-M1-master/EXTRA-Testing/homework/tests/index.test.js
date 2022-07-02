const { checkSeatStatus,
        getRowNumber,
      suma,
    natural,
  resta, } = require('../homework');
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

describe ('ejercicios propios',()=>{
it ('suma valores anteriores a 10',()=>{
  expect(suma(10)).toBe(55)
});
it ('suma valores anteriores a 3',()=>{
  expect(suma(3)).toBe(6)
});
it('numero 10 es natural?', () => {
  expect(natural(10)).toEqual(true);
});
it('numero 10,4 es natural?', () => {
  expect(natural(10.4)).toEqual(false);
});
it ('resta valores anteriores a 3',()=>{
  expect(resta(5)).toBe(-5)
});
it ('resta valores anteriores a 10',()=>{
  expect(resta(6)).toBe(-9)
});



})



  