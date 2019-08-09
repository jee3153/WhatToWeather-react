import React from 'react'


const WhatToWear = (props) => {

    function range(start, edge, step) {
        // If only 1 number passed make it the edge and 0 the start
        if (arguments.length === 1) {
            edge = start;
            start = 0;
        }

        // Validate edge/start
        edge = edge || 0;
        step = step || 1;

        // Create array of numbers, stopping before the edge
        let arr = [];
        for (arr; (edge - start) * step > 0; start += step) {
            arr.push(start);
        }
        return arr;
    }


    const clothes = [
        ['boots', ...range(-40, 10)],
        ['coat', ...range(10, 14)],
        ['flipflop', ...range(29, 51)],
        ['hat', ...range(-40, 10)],
        ['hoodie', ...range(18, 21)],
        ['jacket', ...range(14, 18)],
        ['longshirt', ...range(21, 25)],
        ['longtrousers', ...range(-40, 26)],
        ['paddedjacket', ...range(-40, 10)],
        ['shoes', ...range(10, 23)],
        ['shorttrousers', ...range(26, 51)],
        ['tanktop', ...range(30, 51)],
        ['trainers', ...range(23, 29)],
        ['tshirt', ...range(25, 31)]]

    const decisionMaker = (temp) => {
        let itemArr = []
        for (let i = 0; i < clothes.length; i++) {
            if (clothes[i].includes(temp)) {
                itemArr.push(clothes[i][0])
            }
        }
        return itemArr
    }
    // console.log(props.currently)
    // console.log(decisionMaker(props.temperature));

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

    let items = props.currently;
    return (
        <div className='WhatToWear'>

            {items.icon === 'rain' && (
                <div className='WhatToWear__rain-warning'>
                    <div className='WhatToWear__rain-warning__icon'>
                        <img className='WhatToWear__rain-warning__icon__warning' src={`/images/clothes/exclamation.svg`} alt="rain warning" />
                        <img className='WhatToWear__rain-warning__icon__umbrella' src={`/images/clothes/umbrellataken.svg`} alt="umbrella icon" />
                        <img className='WhatToWear__rain-warning__icon__raincoat' src={`/images/clothes/raincoat.svg`} alt="raincoat icon" />
                    </div>
                    <div className='WhatToWear__rain-warning__text'>
                        <p className='WhatToWear__rain-warning__text__rain-msg'>take your umbrella</p>
                    </div>

                </div>
            )}
            <div className='WhatToWear__outfit'>
                {decisionMaker(props.temperature).map((item, index) => (
                    <div className='WhatToWear__outfit__icons' key={index}>
                        <img className='WhatToWear__outfit__icons__icon' src={`/images/clothes/${item}.svg`} alt="outfit for today" />
                    </div>
                ))}
                {outfitSuggestion(props.temperature)}
            </div>


        </div>
    )
}

export default WhatToWear