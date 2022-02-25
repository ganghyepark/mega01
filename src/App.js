import React, {useState} from 'react'; 
import './App.css';

function App() {
  let [inputBox, setInputBox] = useState('');
  return (
    <div className="App">
       <div className='black-nav'>
        <div>Looker Temp webpage</div>
      </div>

      <input onChange={ (e)=>{ setInputBox(e.target.value) } } />
      <button>confirm</button>

      <div> <br/><hr/> 👇 TEMP AREA 👇 </div>
      <div>input value : {inputBox}</div>
     




    </div>
  );
}

export default App;
