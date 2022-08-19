import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards'
import SearchBar from './components/SearchBar';
export default function App() {

  const [cities, setCities] = useState([])

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(response_json => {
       
        if(response_json.main !== undefined){
          const city = {
            min: Math.round(response_json.main.temp_min),
            max: Math.round(response_json.main.temp_max),
            img: response_json.weather[0].icon,
            id: response_json.id,
            wind: response_json.wind.speed,
            temp: response_json.main.temp,
            name: response_json.name,
            weather: response_json.weather[0].main,
            clouds: response_json.clouds.all,
            latitude: response_json.coord.lat,
            longitude: response_json.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
      // .catch(e=>console.log(e))

    }
function onClose(id){
setCities(oldCities=>oldCities.filter(c => c.id !== id))
}
  




  return (
    <div className="App">
      <h1>Holaaa</h1>
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );

  }