import React from 'react'

const Main = props => {

    return (
        <div className={props.icon === 'rain' ? 'Main Main--rain' : 'Main Main--clear'}>
            <p className='Main__location'>{props.location}</p>
            <p className='Main__temperature'>{props.temperature}°C</p>
            <p className='Main__summary'>{props.summary}</p>
        </div>
    )
}

export default Main
