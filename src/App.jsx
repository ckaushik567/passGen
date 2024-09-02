import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [length,setLenggth] = useState(6);
  const [charAllowed,setCharAllowed] = useState(false);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  const myfunc = useCallback(()=>{
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let spChar = "!@#$%^&*()-_=+\|[]{};:/?.>";
      let numubers = "0123456789";
      let pass = "";
    
      for(let i=0;i<length;i++){
        pass= pass+chars.charAt(Math.floor(Math.random() * chars.length));
        if(charAllowed){
          chars=chars+spChar;
        }
        if(numberAllowed){
          chars = chars+numubers;
        }
      }
      setPassword(pass)
  },[length,charAllowed,numberAllowed]);

  useEffect(()=>{
    myfunc();
  },[length,charAllowed,numberAllowed])

  return (
    <>
     <div className="container">
      <div className="main-container">
        <div className="input-box">
          <input type="text" value={password} />
        </div>
        <div className="other-section">
          <input type="range" name="" id="inpt" onChange={(e)=>setLenggth(e.target.value)}  value={length} min={6} max={100} />
          <label htmlFor="inpt" id='label'>Length {length}</label>
          <input type="checkbox" name="" id="inpt1" onClick={()=>setCharAllowed(prev => !prev)} />
          <label htmlFor="" id='label'>Character</label>
          <input type="checkbox" name="" id='inpt1' onClick={()=>setNumberAllowed(prev => !prev)} />
          <label htmlFor="" id='label' >Number</label>
        </div>
      </div>
     </div>
    </>
  )
}
export default App
