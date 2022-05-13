import React, { useEffect, useState } from 'react';
import { useForm } from './useform';

const UseEf1 =  () => {
    const [values, handleChange] = useForm({email: "", password: "", firstName:""});
    const [varemail, emailChange] = useState("no");
    const [varpassword, passwordChange] = useState("no");
    useEffect(() => { 
        // console.log('useef1; render email:'+ values.email+' password:' + values.password);
        passwordChange("no");
        emailChange("yes");
      }, [values.email]);
      useEffect(() => { 
        passwordChange("yes");
        emailChange("no");
      }, [values.password]);
    return (
        <fieldset>
            <legend>UseEf1 form notification while rendering</legend>
            <div className='divrow'>
              email <input name='email'    value={values.email} 
                placeholder='email' onChange={handleChange} />
              password<input name='password' value={values.password} 
                placeholder="password" onChange={handleChange}   type='password'/>
              tel<input name='telephone' value={values.firsName} 
                placeholder="telephone"
                onChange={handleChange} type="tel" />
            </div>
            <div className='divrow'>
               it was present change in 'email': <input value={varemail} style={{width: '5rem'}}/>
               it was present change in 'password' <input value={varpassword} style={{width: '5rem'}}/>

            </div>
        </fieldset>
    );
};

export default UseEf1;