import React, { useContext } from 'react';
import { UserContext } from '../usercontext';

export const About = () => {
  const { user } = useContext(UserContext);
    return (
        <fieldset><legend>About for router</legend>
          <h2>About</h2>
          <div style={{display: "inline-flex", alignItems: "baseline"}}>
            <span>data about user: </span>&nbsp;
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        </fieldset>
    );
};