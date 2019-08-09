import React from 'react'

const Main = props => {
    let items = props.currently
    return (
        <div className={items.icon === 'rain' ? 'Main Main--rain' : 'Main Main--clear'}>
            <p className='Main__location'>{props.location}</p>
            <p className='Main__temperature'>{props.toCelsius(items.temperature)}°C</p>
            <p className='Main__summary'>{items.summary}</p>
        </div>
    )
}

export default Main
