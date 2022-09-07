import React from 'react';
import s from '../components/styles/searchBar.module.css'
export default function SearchBar(props) {
  // acá va tu código
  console.log(props)
  return <div className={s.posicion}>
    
    <input type='' placeholder ='Buscar...' className={s.posicion}/> 
    <button id='Agregar' onClick={()=>props.onSearch('Buscando una ciudad')}className={s.boton}>Agregar</button>
  </div>
};