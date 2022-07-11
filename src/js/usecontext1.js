import React, { useContext, useState} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { About1 } from './pages/about1';
import { About2 } from './pages/about2';
import { UserContext } from './usercontext';

export const UseContext1 = () => {
    const [msg, setMsg] = useState("default user message for context");

    return (
        <fieldset><legend>UseContext with BrowserRouter</legend>
          <BrowserRouter>
            <div>
                <nav className='list'>
                    <ul>
                        <li>
                            <Link to="/about1/">About1</Link>
                        </li>
                        <li>
                            <Link to="/about2/">About2</Link>
                        </li>
                    </ul>
                </nav>
                <UserContext.Provider value="Hello World from context">
                    <Routes>
                        <Route path='/about1/' element={<About1 />} />
                        <Route path='/about2/' element={<About2 />} />
                    </Routes>
                </UserContext.Provider>
            </div>
          </BrowserRouter>
        </fieldset>
    );
};