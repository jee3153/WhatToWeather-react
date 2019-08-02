import React, { Component } from 'react'
import Proptype from 'prop-types'
import './App.scss'
import Main from './components/Main/Main'
import WeatherToday from './components/BottomSection/WeatherToday/WeatherToday'
import WhatToWear from './components/BottomSection/WhatToWear/WhatToWear'



class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     isLoaded: false,
  //   }
  // }
  state = {
    items: [],
    hourly: [],
    daily: [],
    loading: false,
  };

  componentDidMount() {
    let time
    let lat
    let long

    let geo = navigator.geolocation

    if (geo) {
      geo.getCurrentPosition(position => {
        const d = new Date()
        lat = position.coords.latitude
        long = position.coords.longitude
        time = d.getTime();

        const key = '2c8c1e6560770f3ee472a7dbc4f5b2cb'
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const api = `${proxy}https://api.darksky.net/forecast/${key}/${lat},${long}`



        fetch(api)
          .then(res => res.json())
          .then(res => {
            this.setState({
              loading: true,
              items: res,
              temperature: this.toCelsius(res.currently.temperature),
              summary: res.currently.summary,
              icon: 'rain',
              // icon: res.currently.icon,
              location: this.strSlice(res.timezone),
              hourly: this.apiSlice(res.hourly.data, 0, 26),
              daily: this.apiSlice(res.daily.data, 0, 3),
            })

            console.log(res);
          })

      })
    }
  }

  strSlice = (str) => {
    let strArr = str.split('/')
    return strArr.pop()
  }

  toCelsius = (temp) => {
    const celsius = Math.floor((temp - 32) * (5 / 9))
    return celsius
  }

  apiSlice = (data, from, to) => {
    const slicer = data.slice(from, to)
    return slicer
  }

  render() {
    let { loading } = this.state;

    if (!loading) {
      return <div className='App'>Loading...</div>;
    }
    else {
      return (
        <div className='App'>
          Data has been loaded.
           <Main
            temperature={this.state.temperature} summary={this.state.summary} location={this.state.location} />

          <div className='BottomSection'>
            <WhatToWear temperature={this.state.temperature} location={this.state.location} icon={this.state.icon} />
            <WeatherToday daily={this.state.daily} hourly={this.state.hourly} weatherConv={this.toCelsius} />
          </div>

        </div>
      )
    }


  }
}

export default App
