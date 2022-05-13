import React, { useState } from 'react';
import { useForm } from './useform';

const UseSt4 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <fieldset>
            <legend>useState 4: form</legend>
            <div className='divrow'>
              email <input name='email'  value={email} placeholder="email"
                onChange={e => setEmail(e.target.value)} />
              password<input name='password' value={password}  placeholder="password"
                onChange={e => setPassword(e.target.value)}   type='password'/>
            </div>
           
        </fieldset>
    );
};
export default UseSt4;