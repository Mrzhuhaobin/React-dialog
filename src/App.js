import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextWrap from './components/TextWrap';
import DemoDialog from './components/Demo';

function App() {
  const [show, setShow] = useState(false);
  // 解决滑动穿透
  const [canScroll, setScroll] = useState(true);
  useEffect(() => {
    if (show) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }, [show])
  const textList = [
    {
      id: 0,
      text: '张三'
    },
    {
      id: 1,
      text: '李四'
    },
    {
      id: 2,
      text: '王五'
    }
  ]
  return (
    <div className="App" style={{overflow: canScroll ? 'auto' : 'hidden'}}>
      <header className="App-header">
        <p>我的弹窗组件</p>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="btn-open" onClick={setShow.bind(this, true)}>打开弹窗</div>
      </header>
      <main>
        <TextWrap textList={textList}/>
      </main>
      <DemoDialog show={show} toggleDialog={setShow}/>
    </div>
  );
}

export default App;
