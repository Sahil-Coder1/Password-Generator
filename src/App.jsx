import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [pass,setPassword] = useState();
  const [len,setLength] = useState(10);
  const [isNumber,setNumber] = useState(false);
  const [isSymbol,setSymbol] = useState(false);
  
  const Password = () =>{
    const text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const symbol = '~!@#$%^&*()`?'
    let password = "";
    let textF = text.concat("");
if(isNumber && isSymbol){
   textF = text.concat(number).concat(symbol);
}else if(isSymbol){
  textF = text.concat(symbol);
}else if(isNumber){
   textF = text.concat(number);
}
    for(let i=0;i<len;i++){
      const pas = Math.floor(Math.random() * textF.length);
      password = password+textF.charAt(pas);
    }
    setPassword(password);  
  }
  const Copy = async () =>{
    try{
    await navigator.clipboard.writeText(pass);
    alert("Copied");
  }catch(error){
  alert("Error");
  }
}
  useEffect(() =>{
    Password();
  }, []);
  
  return (
    <div>
   <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full h-screen' >
   <h1 className='text-4xl py-20 text-center text-white'>Password Generator</h1>
  <div className='h-90 m-20 text-center content-center'>
  <input type="text" name="n" id="pass" value={pass} className='bg-green-200 p-4 rounded-lg text-4xl text-center' disabled/>
  <button className='bg-green-600 text-4xl text-white p-4 rounded-xl ml-2 ' onClick={() => {Copy()}}>Copy</button>
  <div>
    <div className='  flex-2 content-center'>
    <label  className='text-orange-800 text-2xl'>Length : {len}</label> &nbsp;
  <input type="range" id="vol" name="vol" min="10" max="50" value={len} onChange={(e) => {setLength(e.target.value);}}/> &nbsp;
  <input type="checkbox" onChange={(e) => setNumber(e.target.checked)} className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"/><label className='text-orange-800 text-2xl '> Numbers</label> &nbsp;
  <input type="checkbox" onChange={(e) => setSymbol(e.target.checked)} className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10" /><label className='text-orange-800 text-2xl '> Symbols</label>
     
    </div>
  <button className='bg-yellow-600 text-2xl text-white p-4 rounded-xl m-2 ' onClick={() => {Password()}}>Generate</button>
  </div>
  </div>
   </div>
    </div>
  )
}

export default App
