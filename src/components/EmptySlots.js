import { useEffect } from 'react';
import molehill from '../img/molehill.png';

const EmptySlots = (props) => {

    useEffect(() => {
        let randomSec = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSec)
        return () => clearTimeout(timer);
    })

    return (
        <div>
            <img style={{'width': '30vw'}} 
            src={molehill} alt='mole hill'/>
        </div>
    )
}

export default EmptySlots