import React, { useState } from 'react';
// import { useForm } from './useform';
import { Hello } from './Hello';

const UseEf3 = () => {
    const [showHello, setShowHello] = useState(true);

    return (
        <fieldset><legend>useEffect3 unmount rendering notification</legend>
          <div className='divrow'>
            <button onClick={() => setShowHello(!showHello)}>toggle Hello</button>
          {showHello && <Hello toggle={true} app={"useef3mount_unmount"}/>}
          </div>
        </fieldset>
    );
};

export default UseEf3;