import './style.css';
import { useState } from 'react';

function App() {
  
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [message, setMessage] = useState("");
  let [resultMessage, setResultMessage] = useState("");

  function validate(){
    
    if (num1 === "" || num2 === "") {

      setMessage("Error!");

      if (num1 === "" && num2 === "") {
        setResultMessage("Both Inputs Cannot Be Empty");
      } 
      else if (num1 === ""){
        setResultMessage("Num1 Cannot Be Empty")
      }
      else if (num2 === ""){
        setResultMessage("Num2 Cannot Be Empty")
      };
      return false;
    }
    if(num1>='a' && num1<='z' || num1>='A'&& num1<='Z' || num2>='a' && num2<='z' || num2>='A'&& num2<='Z'){
      setMessage("Error!");
      setResultMessage('Enter valid format');
      return false;
    }
    setMessage('Success!');
    return true;
  }

  function calculateResult(operator){
    // console.log('clicked');
    if(validate()){
      let n1=parseFloat(num1);
      let n2=parseFloat(num2);

      let result=0;
      if (operator === "+") {
        result = n1 + n2;
      } else if (operator === "-") {
        result = n1 - n2;
      } else if (operator === "*") {
        result = n1 * n2;
      } else if (operator === "/") {
        result = n1 / n2;
      }
      setResultMessage(`Result - ${result}`);
    }
  }
  return (
    <div className="App">
      <div className='main-container'>
        <h1>React Calculator</h1>
        <div className='input-container'>
          <input type="text" placeholder='Number 1' value={num1} onChange={(event) => {
            setNum1(event.target.value);}} />
          <input type="text" placeholder='Number 2' value={num2} onChange={(event) => {
            setNum2(event.target.value);}}/>
        </div>

        <div className='button-container'>
            <button symbol="+" onClick={() => calculateResult("+")}>+</button>
            <button symbol="+" onClick={() => calculateResult("-")}>-</button>
            <button symbol="+" onClick={() => calculateResult("*")}>*</button>
            <button symbol="+" onClick={() => calculateResult("/")}>/</button>
        </div>

        <span className={`message ${message === "Error!" ? "error" : "success"}`}>
          {message}
        </span>
        <p className="result">{resultMessage}</p>
      </div>
    </div>
  );
}

export default App;
