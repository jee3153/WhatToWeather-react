import React, { Component } from 'react'

import './App.scss'
import Main from './components/Main/Main'
import WeatherToday from './components/BottomSection/WeatherToday/WeatherToday'
import WhatToWear from './components/BottomSection/WhatToWear/WhatToWear'
import Spinner from './components/Spinner'

import rainyBg from './assets/blur-cars-dew.jpg'



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
              icon: 'rain',
              // icon: res.currently.icon,
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

  rainChecker = () => {

    if (this.state.summary.includes('rain')) {
      this.setState({
        backgroundImage: `linear-gradient(#fff, #19294d),
      url(${rainyBg})`,

      })


      // this.style = {
      //   backgroundImage: `linear-gradient(#fff, #19294d),
      //     url(${rainyBg})`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundBlendMode: 'exclusion',
      // }

    } else {
      this.setState({
        backgroundImage: 'linear-gradient($main-text, #19294d)'
      })
      // this.style = {
      //   backgroundImage: 'linear-gradient(#fff, #19294d)'
      // }

    }

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
          <Main
            currently={items.currently} toCelsius={this.toCelsius} location={this.state.location} />
          <div className="wrapper">
            <WhatToWear currently={items.currently} temperature={this.state.temperature} />
          </div>

          <div className='BottomSection'>
            <WeatherToday daily={daily} hourly={hourly} summaryToday={items.hourly.summary} icon={items.icon} toCelsius={this.toCelsius} />
          </div>

        </div>
      )

      // if (this.state.summary.includes('rain')) {
      //   return (
      //     <div className='App' style={this.style.rainy}>
      //       <Main
      //         currently={items.currently} toCelsius={this.toCelsius} location={this.state.location} />
      //       <div className="wrapper">
      //         <WhatToWear currently={items.currently} temperature={this.state.temperature} />
      //       </div>

      //       <div className='BottomSection'>
      //         <WeatherToday daily={daily} hourly={hourly} summaryToday={items.hourly.summary} icon={items.icon} toCelsius={this.toCelsius} />
      //       </div>

      //     </div>
      //   )
      // } else {
      //   return (
      //     <div className='App' style={this.style.clear}>
      //       <Main
      //         currently={items.currently} toCelsius={this.toCelsius} location={this.state.location} />
      //       <div className="wrapper">
      //         <WhatToWear currently={items.currently} temperature={this.state.temperature} />
      //       </div>

      //       <div className='BottomSection'>
      //         <WeatherToday daily={daily} hourly={hourly} summaryToday={items.hourly.summary} icon={items.icon} toCelsius={this.toCelsius} />
      //       </div>

      //     </div>
      //   )
      // }

    }
  }
}

export default App


