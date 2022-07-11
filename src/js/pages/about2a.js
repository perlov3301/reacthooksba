import React, { useContext } from 'react';
import { UserContext } from '../usercontext';

export const About2 = () => {
  const { user } = useContext(UserContext);
    return (
        <fieldset><legend>About for router shows login data from about1a</legend>
          <h2>About</h2>
          <div style={{display: "inline-flex", alignItems: "baseline"}}>
            <span>data:</span>&nbsp;
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div> 
        </fieldset>
    );
};