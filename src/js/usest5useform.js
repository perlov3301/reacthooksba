import React from 'react';
import { useForm } from './useform';

export const UseSt5 = () => {
    const [values, handleChange] = useForm({email: "", password: ""});
    const [values2, handleChange2] = useForm({firstName: "", lastName: ""});

    return (
        <fieldset><legend>useState 5:  useForm custom Hook</legend>
          <div className="divrow">
            <input name='email' value={values.email}
              placeholder="email" onChange={handleChange} />
            <input name='password' value={values.password}
                placeholder="password" onChange={handleChange} type='password' /> <br/>
          </div>
          <div className="divrow" >         
            <input name='firstName' value={values2.firstName}
              placeholder="first Name" onChange={handleChange2} />
            <input name='lastName' value={values2.lastName}
              placeholder="last Name" onChange={handleChange2} />
          </div> 

        </fieldset>
    );
};
// export default UseSt5;