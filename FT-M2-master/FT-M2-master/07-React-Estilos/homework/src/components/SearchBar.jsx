import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  console.log(props)
  return <div>
    
    <input type='' placeholder ='Buscar...' /> <button id='Agregar' onClick={()=>props.onSearch('Buscando una ciudad')}>Agregar</button>
  </div>
};