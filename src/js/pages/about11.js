import React, { useContext } from 'react';
import { UserContext } from '../usercontext';

export const About1 = () => {
  const { value, setValue } = useContext(UserContext);
    return (
        <fieldset><legend>about11 with button</legend>
          <h2>About1</h2>
          <div>{value}</div>
          <button 
            onClick={() => setValue("new value after clicking")}
          >change value</button>
        </fieldset>
    );
};