import React , { useContext } from 'react';
import { UserContext } from '../usercontext';
import { login } from "../utils/login_a";

export const About1 = () => {
  const {user, setUser} = useContext(UserContext);
    return (
        <fieldset><legend>Page  for router with button that provides login data</legend>
          <h2>About1 (Login Page)</h2>
          <div style={{display: "inline-flex", alignItems: "baseline"}}>
            <span>data:</span>&nbsp;
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div> 
          <button onClick={async () => {
            const user = await login();
              setUser(user);
            }}>login</button>
        </fieldset>
    );
};