import React, { useState, useEffect, useRef } from 'react';
import { useForm } from './useform';
import {HelloRef} from './Helloref';

const UseRef1 = () => {

    const [values, handleChange] =useForm({email: "", password: "", })
    const inputRef = useRef();
    const [showHello, setShowHello] = useState(true);

    return (
        <fieldset><legend>useRef1 storing reference to a Component</legend>
          <div className='divrow'>
            <button onClick={() => {
                inputRef.current.focus();
            }}>focus</button>
            <input ref={inputRef}
                name='email'    value={values.email} 
                placeholder='email' onChange={handleChange} />
          </div>
          <div className='divrow'>
              <button onClick={() => setShowHello(!showHello)} >toggle</button>
              {showHello && <HelloRef />}
          </div>
        </fieldset>
    );
};

export default UseRef1;