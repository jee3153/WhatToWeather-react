import React from 'react'

const Main = props => {

    return (
        <div className='Main'>
            <p className='Main__location'>{props.location}</p>
            <p className='Main__temperature'>{props.temperature}°C</p>
            <p className='Main__summary'>{props.summary}</p>
        </div>
    )
}

export default Main
