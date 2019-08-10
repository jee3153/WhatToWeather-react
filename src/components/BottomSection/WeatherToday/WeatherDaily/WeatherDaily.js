import React from 'react'
// import ReactDOM from 'react-dom'
// import ReactSprite from 'react-sprite'
// import clearday from '../../../../assets/images/weather/clear-day.svg'
// import clearnight from '../../../../assets/images/weather/clear-night.svg'
// import cloudy from '../../../../assets/images/weather/cloudy.svg'
// import fog from '../../../../assets/images/weather/fog.svg'
// import hail from '../../../../assets/images/weather/hail.svg'
// import partlycloudyday from '../../../../assets/images/weather/partly-cloudy-day.svg'
// import partlycloudynight from '../../../../assets/images/weather/partly-cloudy-night.svg'
// import rain from '../../../../assets/images/weather/rain.svg'
// import sleet from '../../../../assets/images/weather/sleet.svg'
// import snow from '../../../../assets/images/weather/snow.svg'
// import wind from '../../../../assets/images/weather/wind.svg'

// console.log(typeof clearday);
// console.log(clearday)
// console.log(clearnight)



const WeatherDaily = (props) => {
    const weeklyDays = (t) => {

        const d = new Date(t * 1000);
        const DayNumber = d.getDay()
        const week = numToDay(DayNumber)

        return week
    }


    const numToDay = (n) => {
        const weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thurs";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        return weekday[n]
    }

    const tempAvg = (min, max) => {

        let avg = (min + max) / 2;
        return props.toCelsius(avg);

    }

    // const weeklyDays = () => {
    //     const d = new Date();
    //     const weekday = new Array(7);
    //     weekday[0] = "Sunday";
    //     weekday[1] = "Monday";
    //     weekday[2] = "Tuesday";
    //     weekday[3] = "Wednesday";
    //     weekday[4] = "Thursday";
    //     weekday[5] = "Friday";
    //     weekday[6] = "Saturday";

    //     return weekday[d.getDay()]

    // }

    const strSpliter = (str) => {
        const strArr = str.split('-');
        const ArrJoin = strArr.join('');

        return ArrJoin
    }


    const a = [0, 1, 2, 3, 4]
    let daily = props.daily
    strSpliter(props.daily[0].icon);

    return (
        <div className='WeatherDaily'>
            <ul className='WeatherDaily__lists'>
                <div className="WeatherDaily__template">
                    <div className='WeatherDaily__hr-line'></div>
                    {a.map(i => {
                        return <div className={daily[0].summary.includes('rain') || daily[0].summary.includes('drizzle') ? `WeatherDaily__circle--rain WeatherDaily__circle-${i}` : `WeatherDaily__circle WeatherDaily__circle-${i}`} key={i} ></div>
                    })}
                </div>
                {daily.map((item, index) => (
                    <li className={`WeatherDaily__list-item WeatherDaily__list-item-${index}`} key={index}>

                        <img className='WeatherDaily__icon' src={`${process.env.PUBLIC_URL}/images/weather/${item.icon}.svg`} alt="weather icon" />

                        <p className='WeatherDaily__day'>{weeklyDays(item.time)}</p>
                        <p className="WeatherDaily__temp">
                            {tempAvg(item.apparentTemperatureMax, item.apparentTemperatureMin)}°
                        </p>


                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WeatherDaily
