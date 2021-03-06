import React, { Component } from 'react'

import './App.scss'
import Main from './components/Main/Main'
import WeatherToday from './components/BottomSection/WeatherToday/WeatherToday'
import WhatToWear from './components/BottomSection/WhatToWear/WhatToWear'
import Spinner from './components/Spinner'



class App extends Component {

  state = {
    items: [],
    hourly: [],
    daily: [],
    loading: false,

  };


  componentDidMount() {
    // let time
    let lat
    let long

    let geo = navigator.geolocation

    if (geo) {
      geo.getCurrentPosition(position => {
        // const d = new Date()
        lat = position.coords.latitude
        long = position.coords.longitude
        // time = d.getTime();

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
    let { loading, items, hourly, daily } = this.state;
    // console.log(items)

    console.log(items)
    console.log(this.state.summary)

    if (!loading) {
      return (
        <div className='App App--loading'>
          <Spinner />
        </div>
      )

    }
    else {
      const dailySummary = daily[0].summary
      console.log(daily)
      return (
        <div className={dailySummary.includes('rain') || dailySummary.includes('drizzle') ? 'App App--rain' : 'App'}>
          <Main dailySummary={dailySummary}
            currently={items.currently} toCelsius={this.toCelsius} location={this.state.location} />
          <div className="wrapper">
            <WhatToWear temperature={this.state.temperature} daily={daily} />
          </div>

          <div className='BottomSection'>
            <WeatherToday daily={daily} hourly={hourly} summaryToday={items.hourly.summary} icon={items.icon} toCelsius={this.toCelsius} />
          </div>

        </div>
      )

    }
  }
}

export default App


