import React from 'react'
import WeatherHourly from './WeatherHourly/WeatherHourly'
import WeatherDaily from './WeatherDaily/WeatherDaily'
import Header from '../Header/Header'
import Btn from './../Btn'


const WeatherToday = (props) => {


    const whatToday = () => {
        const d = new Date();
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return weekday[d.getDay()]

    }



    return (

        <div className='WeatherToday'>
            <Header>
                <h2 className='Header__text'>{whatToday()}</h2>
                <span>{props.weatherConv(props.daily[0].apparentTemperatureMax)}°</span>
                <span>{props.weatherConv(props.daily[0].apparentTemperatureMin)}°</span>
                <span>{props.daily[0].summary}</span>
                <hr className='hr' />
                <Btn />
            </Header>

            <WeatherHourly hourly={props.hourly} weatherConv={props.weatherConv} />

            <Header>
                <p className='Header__text'>Weekly</p>
                <Btn />
                <hr className='hr' />
            </Header>

            <WeatherDaily daily={props.daily} weatherConv={props.weatherConv} days={whatToday} />
        </div>
    )
}

export default WeatherToday
{/* <div className='header dropdown-menu generic'>
<h2 className='header__text'>{whatToday()}</h2>
<span>{props.weatherConv(props.daily[0].apparentTemperatureMax)}°</span>
<span>{props.weatherConv(props.daily[0].apparentTemperatureMin)}°</span>
<span>{props.daily[0].summary}</span>
<hr className='hr' />
<Btn />
<WeatherDaily daily={props.daily} weatherConv={props.weatherConv} days={whatToday} />

</div> */}