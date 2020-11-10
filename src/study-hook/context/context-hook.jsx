import React, {useContext} from 'react';
import './index.scss';

const ThemeContext = React.createContext(null);
/**
 * @key useContext的使用
 */
function App() {
  
  return (
    <div>
      <ThemeContext.Provider value="light">
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton () {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  const context = useContext(ThemeContext);
    return <Button theme={context} />;
}

function Button (props) {
  return (
    <div
    className={`init ${props.theme}`}></div>
  )
}
export default App;
