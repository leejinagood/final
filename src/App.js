import './App.css';
import React, {useState} from 'react';

function App() {
  const [colorCode, setColorCode] = useState("Purple"); //상태변경 함수 선언과 초기값 Purple 설정

  const changeText = (e) => { //input창에 입력된 값 화면에 표시되도록 함수 선언
    setColorCode(e.target.value);
  }

  const activeEnter = (e) => { //input창에 2진수, 16진수 색상을 입력했을 때 enter키를 누르면 화면 색상 자동 변경
    if(e.key === "Enter") {
      applyColor();
    }
  }

  const applyColor = () => { //css에 동적으로 화면 변경할 수 있도록 함수 선언
    document.documentElement.style.setProperty(
      '--background-color', 
      colorCode
    );
  }

  return ( //jsx문법에 따른 return 코드
    <div style={{margin: "50px 50px"}} > 
    {/* 보기 편하도록 마진값 설정 */}

      <label>Background Color: </label>

      <p>{colorCode}</p>
      {/* 입력된 색상코드 출력 */}

      <input value={colorCode} onChange={changeText} onKeyDown={(e) => activeEnter(e)}/>
      {/* input창에 색상 코드 입력 */}

      {/* <button onClick={applyColor}>적용</button> <-- //적용버튼 주석처리*/}
    </div>
  );
}

export default App;