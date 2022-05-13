import React, { useState,useEffect } from 'react';
import { useForm } from './useform';
// import { Hello } from './Hello';

const UseEf5 = () => {
   
    const [{vx,vy}, setXY] = useState({vx: 0, vy: 0});
    let xtext = document.getElementsByName('x');
    let ytext = document.getElementsByName('y');
    // const [showHello, setShowHello] = useState(true);
    useEffect(() => {
        const onMouseMove = e => {// extract screenXY from e object
            setXY(curr => ({vx: e.screenX, vy: e.screenY}))
        };
        window.addEventListener('mousemove', onMouseMove);
        // clean up old values
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            // console.log("useef5: removing old screenX screenY")
        };
    }, []) ;

    return (
        <fieldset><legend>useef5events shows mouse's screenX screenY</legend>
          <div className='divrow'>
          </div>
            <div className='divrow'>
           screenX <input name='x' id='idx' value={vx}  readOnly={true}/>&nbsp;&nbsp;
           screenY <input name='y' id='idy' value={vy} readOnly={true}  />
          </div>
        </fieldset>
    );
};

export default UseEf5;