import React from 'react';
import s from '../components/styles/card.module.css';

// max={Cairns.main.temp_max}
// min={Cairns.main.temp_min}
// name={Cairns.name}
// img={Cairns.weather[0].icon}
// onClose={() => alert(Cairns.name)}
export default function Card(props) {
  // acá va tu código
  console.log(props)
  return (

    <div className={s.card}>
      <button onClick={props.onClose} className={s.btn} >X</button>


      <h3 > {props.name}</h3>

      <div className={s.div2}>
        <h4 className={s.separador}>Min   {props.min - 273.15}</h4>

        <h4 className={s.separador}
        
        >Max   {props.max - 273.15 }</h4>
        
      </div>

      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />

    </div>

  )
};