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



    return (

        <div className='WeatherToday generic'>
            <Header>
                <div className="WeatherToday__header__hourly WeaterToday--closer-to-hr Header--margin">
                    <h2 className='WeatherToday__header__hourly__day Header__title'>{whatToday()}</h2>

                    <span className='WeatherToday__header__hourly__max'>{props.weatherConv(props.daily[0].apparentTemperatureMax)}°</span>
                    <span className='WeatherToday__header__hourly__min'>{props.weatherConv(props.daily[0].apparentTemperatureMin)}°</span>



                </div>

            </Header>
            <p className='WeatherToday__header__hourly__summary'>{props.daily[0].summary}</p>

            <WeatherHourly hourly={props.hourly} weatherConv={props.weatherConv} />

            <WeatherDaily daily={props.daily} weatherConv={props.weatherConv} days={whatToday} icon={props.icon} />
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