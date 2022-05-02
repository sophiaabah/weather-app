// work on icons feature.

import React from 'react';
import CardList from './CardList';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      city: '',
      forecastArray: [],
      forecastByTime: [],
      forecastByDay: [],
      flip: true,
    };
  }

  

componentDidMount() {
  navigator.geolocation.getCurrentPosition(result => {

    const api = 'a94fd89b160991ae9706e0019ed93d41';
    const lon = (result.coords.longitude);
    const lat = (result.coords.latitude);
    const base = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;

    fetch(base)
    .then(response => response.json())
    .then(response => { this.setState({
        city: response.city.name,
        forecastArray: response.list,
        forecastByTime: this.state.forecastArray.slice(1, 6),
        forecastByDay: [this.state.forecastArray[7], this.state.forecastArray[13], this.state.forecastArray[20], this.state.forecastArray[27], this.state.forecastArray[34]]
    })})
  })};


  handleClick = () => {
    this.setState({flip: !this.state.flip});
  }

    render(){
      const { city, forecastArray, forecastByTime, flip, forecastByDay } = this.state;
      return !forecastArray.length ?
      <h1>Loading</h1> :
      (
      <div className='tc box marge'>
        <h2 className='more header'>{Math.round(forecastArray[0].main.temp)}° in {city}</h2>
        <div className='ttc'>{forecastArray[0].weather[0].description}</div>
        <div className='marge'>Feels like {Math.round(forecastArray[0].main.feels_like)}°</div>
        <div className='container'><button className=' btn' onClick={this.handleClick}>{flip ? '5-day forecast': 'Hourly forecast'}</button></div>
        <div>
          <CardList className='card' flip={flip} timeArray={forecastByTime} dayArray={forecastByDay} />
        </div>
        
      </div>
    );
  }
}

export default App;

