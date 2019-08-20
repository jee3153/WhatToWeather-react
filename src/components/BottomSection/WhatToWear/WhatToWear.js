import React from 'react'



const WhatToWear = (props) => {


    const curTemp = props.temperature

    const top = {
        'coat': { 'temp': curTemp >= 10 && curTemp < 14 },
        'jacket': { 'temp': curTemp >= 14 && curTemp < 18 },
        'hoodie': { 'temp': curTemp >= 18 && curTemp < 21 },
        'paddedjacket': { 'temp': curTemp < 10 },
        'tanktop': { 'temp': curTemp > 29 },
        'longshirt': { 'temp': curTemp >= 21 && curTemp < 25 },
        'tshirt': { 'temp': curTemp >= 25 && curTemp < 31 },
    }

    const bottom = {
        'longtrousers': { 'temp': curTemp < 26 },
        'shorttrousers': { 'temp': curTemp > 25 }
    }

    const shoe = {
        'boots': { 'temp': curTemp < 10 },
        'flipflop': { 'temp': curTemp > 28 },
        'trainers': { 'temp': curTemp >= 23 && curTemp < 29 },
        'shoes': { 'temp': curTemp >= 10 && curTemp < 23 }
    }

    const hat = {
        'hat': { 'temp': curTemp < 10 }
    }

    const decisionMaker = (type) => {
        for (let key in type) {
            if (type[key]['temp']) {
                return (
                    <img className='WhatToWear__outfit__icons__icon' src={`${process.env.PUBLIC_URL}/images/clothes/${key}.svg`} alt="outfit for today" />
                )
            }
        }
    }

    const outfitSuggestion = (temp) => {
        let msg;

        (temp < 10) && (msg = 'wrap yourself');
        (temp >= 10 && temp < 14) && (msg = 'proper winterwear');
        (temp >= 14 && temp < 17) && (msg = 'at least take a jacket');
        (temp >= 17 && temp < 21) && (msg = 'light cardigan or hoodie');
        (temp >= 21 && temp < 25) && (msg = 'farily light');
        (temp >= 25 && temp <= 30) && (msg = 'very summery');
        (temp > 30) && (msg = 'HEATWAVE');

        return (
            <p className='WhatToWear__outfit__suggestion-msg'>{msg}</p>
        )
    }

    const summaryToday = props.daily[0].summary

    return (
        <div className='WhatToWear'>
            {(summaryToday.includes('rain') || summaryToday.includes('drizzle')) && (
                <div className="WhatToWear__rain-warning">
                    <div className="WhatToWear__rain-warning__icon">
                        <img className='WhatToWear__rain-warning__icon__warning' src={`${process.env.PUBLIC_URL}/images/clothes/exclamation.svg`} alt="rain warning" />
                        <img className='WhatToWear__rain-warning__icon__umbrella' src={`${process.env.PUBLIC_URL}/images/clothes/umbrellataken.svg`} alt="umbrella icon" />
                        <img className='WhatToWear__rain-warning__icon__raincoat' src={`${process.env.PUBLIC_URL}/images/clothes/raincoat.svg`} alt="raincoat icon" />
                    </div>
                    <div className='WhatToWear__rain-warning__text'>
                        <p className='WhatToWear__rain-warning__text__rain-msg'>take your umbrella</p>
                    </div>
                </div>


            )}

            <div className='WhatToWear__outfit'>
                <div className='WhatToWear__outfit__icons'>
                    {decisionMaker(top)}
                    {decisionMaker(bottom)}
                    {decisionMaker(shoe)}
                    {decisionMaker(hat)}
                </div>

                {outfitSuggestion(props.temperature)}
            </div>


        </div>
    )
}

export default WhatToWear

// function range(start, edge, step) {
    //     // If only 1 number passed make it the edge and 0 the start
    //     if (arguments.length === 1) {
    //         edge = start;
    //         start = 0;
    //     }

    //     // Validate edge/start
    //     edge = edge || 0;
    //     step = step || 1;

    //     // Create array of numbers, stopping before the edge
    //     let arr = [];
    //     for (arr; (edge - start) * step > 0; start += step) {
    //         arr.push(start);
    //     }
    //     return arr;
    // }

// const clothes = [
    //     ['boots', ...range(-40, 10)],
    //     ['coat', ...range(10, 14)],
    //     ['flipflop', ...range(29, 51)],
    //     ['hat', ...range(-40, 10)],
    //     ['hoodie', ...range(18, 21)],
    //     ['jacket', ...range(14, 18)],
    //     ['longshirt', ...range(21, 25)],
    //     ['longtrousers', ...range(-40, 26)],
    //     ['paddedjacket', ...range(-40, 10)],
    //     ['shoes', ...range(10, 23)],
    //     ['shorttrousers', ...range(26, 51)],
    //     ['tanktop', ...range(30, 51)],
    //     ['trainers', ...range(23, 29)],
    //     ['tshirt', ...range(25, 31)]]

    // const decisionMaker = (temp) => {
    //     let itemArr = []
    //     for (let i = 0; i < clothes.length; i++) {
    //         if (clothes[i].includes(temp)) {
    //             itemArr.push(clothes[i][0])
    //         }
    //     }
    //     return itemArr
    // }
    // console.log(props.currently)
    // console.log(decisionMaker(props.temperature));