import React from 'react';
// import {Router, Route, Link} from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageA from './pages/dashboard/index';
import PageB from './pages/about/index';
import PageC from './pages/like/index'
import './App.css';

function App () {
  return (
    <Router>
      <Route exact path="/">
        <Demo></Demo>
      </Route>
      <Route path="/index"><PageA></PageA></Route>
      <Route path="/about"><PageB></PageB></Route>
      <Route path="/like"><PageC></PageC></Route>
    </Router>
  )
}


function Demo() {
  return (
    <div className="App">
      <header className="page">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ul>
          <li>
            <Link to="/index">首页</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
          <li>
            <Link to="/like">喜欢</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
