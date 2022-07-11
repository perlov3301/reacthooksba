import React , { useContext } from 'react';
import { UserContext } from '../usercontext';
import { login } from "../utils/login";

export const Index = () => {
  const {user, setUser} = useContext(UserContext);
    return (
        <fieldset><legend>index  for router with "login" and "logout" buttons</legend>
          <h2>Home</h2>
          <div style={{display: "inline-flex", alignItems: "baseline"}}>
            <span>data about user: </span>&nbsp;
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
          {user ? (
              <button
                onClick={() => {
                  setUser(null);
                }}
              >logout</button>
            ) : (
              <button onClick={async () => {
                const user = await login();
                  setUser(user);
                }}>login</button>
            )
          }
        
        </fieldset>
    );
};