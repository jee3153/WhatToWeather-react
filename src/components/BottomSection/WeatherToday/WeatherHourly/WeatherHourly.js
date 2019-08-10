import React from 'react'

const WeatherHourly = (props) => {
    const UnixConvertor = (t) => {
        const d = new Date(t * 1000);
        const hr = d.getHours()

        return hr
    }

    let hourly = props.hourly
    return (

        <div className='WeatherHourly'>
            <ul className='WeatherHourly__lists generic'>
                {hourly.map((item, index) => (
                    <li
                        className='WeatherHourly__list-item' key={index}>
                        <p className='WeatherHourly__list-time'>{UnixConvertor(item.time) + ':00'}</p>
                        <img className='WeatherHourly__list-icon' src={`${process.env.PUBLIC_URL}/images/weather/${item.icon}.svg`} alt="weather icon" />
                        <p className='WeatherHourly__list-temp'>{props.toCelsius(item.apparentTemperature)}°</p>
                    </li>
                ))}
            </ul>
        </div >

    )
}

export default WeatherHourly


// export class WeatherHourly extends Component {

//     UnixConvertor = (t) => {
//         const d = new Date(t * 1000);
//         const hr = d.getHours()

//         return hr
//     }


//     render() {
//         let items = this.props.hourly


//         // let data = item.slice(0, 10).map(({ time: x, apparentTemperature: y, apparentTemperature: label }) => (
//         //     { x, y: this.props.weatherConv(y), label: `${this.props.weatherConv(label)}°`, style: { fill: '#fff' } }

//         // ));



//         return (
//             <div>
//                 <div className='WeatherHourly'>
//                     <ul className='WeatherHourly__lists generic'>
//                         {this.props.hourly.map((item, index) => (
//                             <li
//                                 className='WeatherHourly__list-item' key={index}>
//                                 <p className='WeatherHourly__list-time'>{this.UnixConvertor(item.time) + ':00'}</p>
//                                 <img className='WeatherHourly__list-icon' src={`/images/weather/${item.icon}.svg`} alt="weather icon" />
//                                 <p className='WeatherHourly__list-temp'>{this.props.weatherConv(item.apparentTemperature)}°</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div >

//             </div >
//         )
//     }
// }

// export default WeatherHourly

