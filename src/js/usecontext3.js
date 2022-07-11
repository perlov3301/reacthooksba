import React, {useState,  useMemo}  from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { About1 } from "./pages/about1a";
import { About2 } from "./pages/about2a";
import { UserContext } from './usercontext';

export const UseContext3 = () => {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user, setUser}), [user, setUser]);
    return (
        <fieldset><legend>UseContext3 with data from login file</legend>
        
          <Router>
            <div>
                <nav className='list'>
                    <ul>
                        <li>
                            <Link to="/about1a/">About1 with login button</Link>
                        </li>
                        <li>
                            <Link to="/about2a/">About2</Link>
                        </li>
                    </ul>
                </nav>
                <UserContext.Provider value={value}>
                        {/** each child of UserContext can get the value */}
                  <Routes>
                        <Route path="/about1a/" element={<About1/>} />
                        <Route path="/about2a/" element={<About2/>} />
                  </Routes>
                </UserContext.Provider>
            </div>
          </Router>
        </fieldset>
        
    );
}

