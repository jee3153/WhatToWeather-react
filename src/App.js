import React, { Component } from 'react'

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
              // icon: 'rain',
              icon: res.currently.icon,
              location: this.strSlice(res.timezone),
              hourly: this.apiSlice(res.hourly.data, 0, 10),
              daily: this.apiSlice(res.daily.data, 0, 5),
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

  apiSlice = (data, from = 0, to) => {
    const slicer = data.slice(from, to)
    return slicer
  }


  render() {
    let { loading, items } = this.state;

    if (!loading) {
      return (
        <div className='App App--loading'>
          <img className='loader-icon' src="/images/loader-icon/Eclipse.svg" alt="loader" />
        </div>
      )

    }
    else {

      return (
        <div className={this.state.icon === 'rain' ? 'App App--rain' : 'App'}>
          <Main
            temperature={this.state.temperature} summary={this.state.summary} location={this.state.location} icon={items.icon} />
          <div className="wrapper">
            <WhatToWear temperature={this.state.temperature} location={this.state.location} icon={this.state.icon} />
          </div>

          <div className='BottomSection'>
            <WeatherToday daily={this.state.daily} hourly={this.state.hourly} weatherConv={this.toCelsius} icon={items.icon} />
          </div>
        </div>
      )
    }
  }
}

export default App
{/* <div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-eclipse"><div></div></div><style type="text/css">@keyframes lds-eclipse {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes lds-eclipse {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.lds-eclipse {
  position: relative;
}
.lds-eclipse div {
  position: absolute;
  -webkit-animation: lds-eclipse 1s linear infinite;
  animation: lds-eclipse 1s linear infinite;
  width: 160px;
  height: 160px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  box-shadow: 0 4px 0 0 #93dbe9;
  -webkit-transform-origin: 80px 82px;
  transform-origin: 80px 82px;
}
.lds-eclipse {
  width: 200px !important;
  height: 200px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
</style></div> */}