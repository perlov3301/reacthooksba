import React, { useContext } from 'react';
import { UserContext } from '../usercontext';

export const About2 = () => {
    const msg = useContext(UserContext);
    return (
        <fieldset><legend>About2 for BrowserRouter</legend>
          <h2>About2</h2>
          <div>msg within About2:{msg}</div>
        </fieldset>
    );
};