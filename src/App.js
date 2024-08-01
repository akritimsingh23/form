import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('')
  function submitForm(e){
    e.preventDefault();
    console.group(text)
  }

  function changeText(e){
    setText(e.target.value)
  }
  return (
    <>
    <form>
      <input
      type='text'
      placeholder='Enter text here...'
      onChange ={changeText}
      value={text}
      >
      </input>
    </form>
    <button onClick={submitForm}>Submit</button>
    </>
  );
}

export default App;
