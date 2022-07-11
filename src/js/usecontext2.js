import React, {useState, useMemo} from 'react';
import { BrowserRouter as Router, 
    Route, Link, Routes } from 'react-router-dom';
import { About1 } from './pages/about11';
import { About2 } from './pages/about21';
import { UserContext } from './usercontext';

export const  UseContext2 = () => {
    const [value, setValue] = useState("default value: Hello from context");
    const provideValue = useMemo(() => ({value, setValue}), [value, setValue]);

    return (
        <fieldset><legend>UseConext with changelable value</legend>
          <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about11/">about11 with button</Link>
                        </li>
                        <li>
                            <Link to="/about21/">about21</Link>
                        </li>
                    </ul>
                </nav>
                <UserContext.Provider value={provideValue}>
                    <Routes>
                        <Route path='/about11/' element={<About1/>} />
                        <Route path='/about21/' element={<About2/>} />
                    </Routes>
                </UserContext.Provider>
            </div>
          </Router>
        </fieldset>
    );
}