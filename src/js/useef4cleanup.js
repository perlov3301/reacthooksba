import React, { useState,useEffect } from 'react';
import { useForm } from './useform';
// import { Hello } from './Hello';

const UseEf4 = () => {
   
    const [values, handleChange] =useForm({
        email: "",
        password: "",
        firstName: ""
    });
    // const [showHello, setShowHello] = useState(true);
    useEffect(() => {
        // console.log("useuf4cleanup: render");
        //  clean up old values.email
        return () => {
            // console.log("useef4cleanup: unmount=cleaning old values.email");
        };
    }, [values.email]) ;

    return (
        <fieldset><legend>useEffect4  cleaning old values.email & rendering notification</legend>
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

export default UseEf4;