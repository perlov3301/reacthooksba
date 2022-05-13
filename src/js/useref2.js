import React, { useState, useEffect, useRef } from 'react';
import { useForm } from './useform';
import {HelloRef2} from './Helloref2';

export const UseRef2 = () => {

    const [values, handleChange] =useForm({email: "", password: "", })
    const inputRef = useRef();
    const [showHello, setShowHello] = useState(true);

    return (
        <fieldset><legend>useref2 Storing reference to a Component plus useFetch</legend>
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
              {showHello && <HelloRef2 />}
          </div>
        </fieldset>
    );
};
