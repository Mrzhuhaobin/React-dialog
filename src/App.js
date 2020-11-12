import React from 'react'
import ContextHook from './study-hook/context/context-hook'
import ShowPage from './study-hook/callback/index'
import RefUse from './study-hook/study-ref/refTest'
import logo from './logo.svg';
import Store from './context'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ContextHook/>
      <Store.Provider value="测试专用123">
        <ShowPage/>
      </Store.Provider>
      <RefUse/>
    </div>
  );
}

export default App;