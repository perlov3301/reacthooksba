import React, { useContext } from 'react';
import { UserContext } from '../usercontext';

export const About1 = () => {
    const msg = useContext(UserContext);
    return (
        <fieldset><legend>About1 for BrowserRouter</legend>
          <h2>About1</h2>
          <div>msg within About1: {msg}</div>
        </fieldset>
    );
};