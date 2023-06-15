import './App.css';
import React, {useState} from 'react';


function App() {
  const [colorCode, setColorCode] = useState("Purple");

  const changeText = (e) => {
    setColorCode(e.target.value);
  }

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      applyColor();
    }
  }
  const applyColor = () => {
    document.documentElement.style.setProperty(
      '--background-color', 
      colorCode
    );
  }

  return (
    <div style={{margin: "50px 50px"}} >
      <label>Background Color: </label>
      <p>{colorCode}</p>
      <input value={colorCode} onChange={changeText} onKeyDown={(e) => activeEnter(e)}/>
      {/* <button onClick={applyColor}>적용</button> */}
    </div>
  );
}

export default App;