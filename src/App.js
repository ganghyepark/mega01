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
      <iframe id="inlineFrameExample"
        title="Inline Frame Example"
        width="500"
        height="300"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
        // src='Looker주소 입력'
    </iframe>

    </div>
  );
}

export default App;
