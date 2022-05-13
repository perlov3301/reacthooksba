import React, { useState, useEffect } from 'react';
import { useForm } from './useform';
import { Hello } from './Hello';

const UseEf2 = () => {
    const [values, handleChange] = useForm({
        email: "",
        password: "",
        firstName: ""
    });
    const [showHello, setShowHello] = useState(true);
    const [showHello1, setShowHello1] = useState(true)

    // useEffect(() => {
    //     console.log('useef2 rendering');
    //     // cleaner function
    //     return () => { console.log('useef2 unmount'); };
    // },[values.password]);

    return (
        <fieldset><legend>useef2 unmount rendering notification</legend>
          <div className='divrow'>
            <button onClick={() => showHello ? 
              setShowHello(false): setShowHello(true)}>toggle text</button>
            <Hello toggle={showHello} app={"useef2"}/> &nbsp;&nbsp;&nbsp;
            {showHello1 && <Hello toggle={true} app={"useef2"} />}
            <button onClick={() => showHello1 ? 
               setShowHello1(false): setShowHello1(true) } >toggle entire</button>
          </div>
          <div className='divrow'>
          <input name='firstName' placeholder='first Name' value={values.firstName} 
            onChange={handleChange} />
          <input name='email' placeholder='email' value={values.email} 
            onChange={handleChange} />
          <input name='password' placeholder='password' value={values.password} 
            onChange={handleChange} />
          </div>
        </fieldset>
    );
};

export default UseEf2;