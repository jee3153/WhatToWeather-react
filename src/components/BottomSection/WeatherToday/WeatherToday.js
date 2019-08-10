import React from 'react'
import WeatherHourly from './WeatherHourly/WeatherHourly'
import WeatherDaily from './WeatherDaily/WeatherDaily'
import Header from '../Header/Header'


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


    let items = props.daily

    return (

        <div className='WeatherToday generic'>
            <Header>
                <div className="WeatherToday__header__hourly WeaterToday--closer-to-hr Header--margin">
                    <h2 className='WeatherToday__header__hourly__day Header__title'>{whatToday()}</h2>

                    <span className='WeatherToday__header__hourly__max'>{props.toCelsius(items[0].apparentTemperatureMax)}°</span>
                    <span className='WeatherToday__header__hourly__min'>{props.toCelsius(items[0].apparentTemperatureMin)}°</span>

                </div>

            </Header>

            <p className='WeatherToday__header__hourly__summary'>{props.summaryToday}</p>

            <WeatherHourly hourly={props.hourly} toCelsius={props.toCelsius} />

            <WeatherDaily daily={props.daily} toCelsius={props.toCelsius} days={whatToday} icon={props.icon} />
        </div>
    )
}

export default WeatherToday
