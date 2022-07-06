import { useState } from 'react';
import EmptySlots from './EmptySlots';
import Mole from './Mole';


const MoleContainer = (props) =>  {
    
    let [helloMole, byeMole] = useState(false);

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        byeMole(false)
    }

    let displayMole = helloMole ? <Mole handleClick={handleClick} toggle={byeMole} setScore={props.setScore} /> : <EmptySlots toggle={byeMole}/>
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer;