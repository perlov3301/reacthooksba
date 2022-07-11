import { BrowserRouter as Router, Route, Link, Switch } 
  from "react-router-dom";
export const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Page1 />} />
            <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
        </Switch>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
};
{/**
.css
* {
    padding: 0;
    margin: 0;
}
  
h1 {
    text-align: center;
    font-size: 45px;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(6, 0, 32);
    padding: 40px;
}
  
.list {
    display: flex;
    justify-content: center;
    width: 100%;
}
  
.list ul li {
    list-style: none;
    margin: 42px;
    text-align: center;
}
  
a {
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 14px 25px;
    background-color: transparent;
    border: 2px solid rgb(12, 0, 66);
}
  
a:hover {
    background-color: rgb(12, 0, 66);
    color: rgb(255, 255, 255);
}
npm i bootstrap

index.js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
React.Dom.render...

import { NavLink } from 'react-router-dom';
or import { Link } with the same usage
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <NavLink to="/" className="navbar-toggle" >MyApp</NavLink>
            <button type="button"ndata-bs-toggle="collapse" 
              data-bs-target="#navbarNavAltMarkup">
              <span className="navbar-toggle-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav ms-auto">
                <li className="navbar-item">
                  <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                  ...
                  ...
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </>
  );
};

App.js
import  { Route, Browser as Router } from 'react-router-dom';
import { Header } from '';
import Footer from '';
import Home from '';
...
export App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
          <Route exact path="/" component={ Home } />
          ...
        <Footer />
      </Router>
    </div>
  );
};

*/}