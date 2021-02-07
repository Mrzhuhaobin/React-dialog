import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom';
import PageA from './pages/dashboard/index';
import PageB from './pages/about/index';
import PageC from './pages/like/index'
import './App.scss';

function App () {
  return (
    <Router>
      <Route path="/" component={Demo}></Route>
    </Router>
  )
}


function Demo() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    setNum(parseInt(Math.random() * 10))
  })
  return (
    <div className="app-page">
      <h1 className="app-page-title" id="title">My App</h1>
      <div className="nav-wrap">
          <Link to="/index">首页</Link>
          <Link to={"/about:"+ num}>关于</Link>
          <Link to="/like">喜欢</Link>
      </div>
      <main className="route-view">
        <Redirect from="/" to="/index"></Redirect>
        <Route path="/index" component={PageA}></Route>
        <Route path="/about:num" component={PageB}></Route>
        <Route path="/like" component={PageC}></Route>
      </main>
      
  </div>
  );
}

export default App;
