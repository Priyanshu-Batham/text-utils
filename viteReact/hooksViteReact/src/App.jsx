import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //remove {} from importing useState
  let [count, setCount] = useState(0);
  let up = ()=> setCount(count+=1);
  let down = ()=> setCount(count-=1);


  return (
    <>
      <h1>
        Count:{count}
      </h1>
      <button onClick={up}>UP</button>
      <button onClick={down}>DOWN</button>
    </>
  )
}

export default App
