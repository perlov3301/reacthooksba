import React, { useContext } from 'react';
import { UserContext } from '../usercontext';

export const About2 = () => {
  const { value, setValue } = useContext(UserContext);
    return (
        <fieldset><legend>about21 for router</legend>
          <h2>About2</h2>
          <div>{value}</div>
        </fieldset>
    );
};