import React from 'react'


const WeatherDaily = (props) => {
    const weeklyDays = (t) => {

        const d = new Date(t * 1000);
        const DayNumber = d.getDay()
        const week = numToDay(DayNumber)

        return week
    }

    const numToDay = (n) => {
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return weekday[n]
    }

    console.log(weeklyDays(1564527600))

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

    return (
        <div className='WeatherDaily'>
            <ul>
                {props.daily.map((item, index) => (
                    <li key={index}>
                        <span>{weeklyDays(item.time)}</span>
                        <img src={`/images/weather/${item.icon}.svg`} alt="weather icon" />
                        <span>{props.weatherConv(item.apparentTemperatureMax)}°</span>
                        <span>{props.weatherConv(item.apparentTemperatureMin)}°</span>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WeatherDaily
