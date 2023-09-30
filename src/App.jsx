import { useState } from 'react'
import './App.css'

function App() {
  const [multiplier, setMultiplier] = useState(1)
  const [count, setCount] = useState(0)
  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count>=10){
      setMultiplier(2);
      setCount(count-10);
    }
  }
  const buyPartyPack = () => {
    if (count >=100){
      setMultiplier(5);
      setCount(count-100);
    }
  }
  const buyFullFeast = () => {
    if (count >=1000){
      setMultiplier(10);
      setCount(count-1000);
    }
  }
  return (
    <div className='App'>
      <div className="header">
        <h1 id="header">Samosa Selector</h1>
        <h2 id='count'>Count: {count}</h2>
        <img src='https://tse1.mm.bing.net/th?id=OIP.9RgO9WcxkGY0N4rYgGx5ngHaHa&pid=Api&P=0&h=180' className='samosa' onClick={updateCount}></img>
      </div>
      <br />
      
      <button id='reset' onClick={()=>{setCount(0)}}>Reset</button>

      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed &#128111; </h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack &#128640;</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast &#128115;</h3>
          <p>10x per click</p>
          <button>1000 samosas</button>
        </div>
      </div>
      <button id='resetMultiplier' onClick={()=>{setMultiplier(1)}}>Reset Multiplier</button>
    </div>
  )
}

export default App
