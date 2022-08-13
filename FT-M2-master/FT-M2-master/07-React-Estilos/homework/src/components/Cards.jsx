import React from 'react';
import Card from './Card';
import cities from '../data';

/* <Card
max={Cairns.main.temp_max}
min={Cairns.main.temp_min}
name={Cairns.name}
img={Cairns.weather[0].icon}
onClose={() => alert(Cairns.name)}
/> */

export default function Cards(props) {
//console.log(props.cities)
  // acá va tu código
  // tip, podés usar un map
  //console.log(cities)
  

  return <div>{cities.map(value=><Card 
  
  name = {value.name}
  min = {value.main.temp_min}
  max ={value.main.temp_max}
  img ={value.weather[0].icon}
  key={value.id}
  onClose= {() => alert(value.name)}

  />)}</div>
};