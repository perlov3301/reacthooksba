import React, { useState } from 'react';
import { HelloLaout2width } from './hellolayout2width';

export const UseLayout2width = () => {
    const [showHello, setShowHello] = useState(true);

    return (
        <fieldset><legend>UseLayout2width</legend>
            <div className='divrow'>
                <button onClick={() => setShowHello(!showHello)}>
                    toggle Hello</button>
                <div className='hello'>
                  { showHello && <HelloLaout2width/> }
                  { !showHello && "Hello" }
                </div>
            </div>
        </fieldset>
    );
};