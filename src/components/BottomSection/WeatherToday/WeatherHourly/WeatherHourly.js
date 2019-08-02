import React from 'react'


function WeatherHourly(props) {
    const UnixConvertor = (t) => {
        const d = new Date(t * 1000);
        const hr = d.getHours()

        return hr
    }
    return (
        <div className='WeatherHourly'>
            <ul>
                {props.hourly.map((item, index) => (
                    <li key={index}>
                        <p>{UnixConvertor(item.time)}</p>
                        <img src={`/images/weather/${item.icon}.svg`} alt="weather icon" />
                        <p>{props.weatherConv(item.apparentTemperature)}°C</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WeatherHourly