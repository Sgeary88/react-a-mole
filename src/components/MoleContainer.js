import { useState } from 'react';
import EmptySlots from './EmptySlots';
import Mole from './Mole';


function MoleContainer(props) {
    let [helloMole, byeMole] = useState(false);

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        byeMole(false)
    }

    let displayMole = helloMole ? <Mole handleClick={handleClick} /> : <EmptySlots />
    return (
        <div>
            <displayMole />
        </div>
    )
}

export default MoleContainer;