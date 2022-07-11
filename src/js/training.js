import React, {useState,  useMemo}  from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserContext } from './usercontext';

function Training() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user, setUser}), [user, setUser]);
    return (
        <fieldset><legend>useContext last changes</legend>
        
          <Router>
            <div >
                <nav className='list'>
                    <ul>
                        <li>
                            <Link to="/">Home with login button</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                    </ul>
                </nav>
                <UserContext.Provider value={value}>
                        {/** each child of UserContext can get the value */}
                  <Routes>
                        <Route exact path="/"  element={<Index/>} />
                        <Route path="/about/" element={<About/>} />
                  </Routes>
                </UserContext.Provider>
            </div>
          </Router>
        </fieldset>
        
    );
}

export default Training;
