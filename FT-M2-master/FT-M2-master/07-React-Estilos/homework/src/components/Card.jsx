import React from 'react';
// max={Cairns.main.temp_max}
// min={Cairns.main.temp_min}
// name={Cairns.name}
// img={Cairns.weather[0].icon}
// onClose={() => alert(Cairns.name)}
export default function Card(props) {
  // acá va tu código
    console.log(props)
  return <div> 
  <h3> {props.name}</h3>
  <h3>Min <br /> {props.min}</h3>
  <h3>Max <br /> {props.max}</h3>
  <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}  alt=""/>
  <button onClick={props.onClose}>X</button>
  </div>

};