import { useEffect } from 'react';
import moleImg from '../img/mole.png';


const Mole = (props) => {

    useEffect (() => {
        console.log('testing');
        let randomSec = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSec)
        return () => clearTimeout(timer);
    })
    

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg} alt='mole'
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole;