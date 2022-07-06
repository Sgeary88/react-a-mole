import { useEffect, useState } from 'react';
import molehill from '../molehill.png';

const EmptySlots = (props) => {
    useEffect(() => {
        let randomSec = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randomSec)
        return () => clearTimeout(timer);
    })

    return (
        <div>
            <img style={{'width': '30vw'}} 
            src={molehill} />
        </div>
    )
}

export default EmptySlots