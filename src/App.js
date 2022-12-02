import './App.css';
import whiskeys from './whiskeyData.json';
import { WhiskeyItem } from './WhiskeyItem.jsx';
import { useState } from "react";


function App() {
  // const names = ["Pedro","jake","Max"]
  const [displayedWhiskey, setDisplayedWhiskey] = useState()
  return (
    <div className="App">
      
      <button > Remove Whiskies cheaper than $50</button>
      <div className='whiskeyMenu'>
        {whiskeys.map((whiskey)=>(
          <WhiskeyItem item = {whiskey} />
        )
        )}
      </div>
      {/* {names.map((name,_)=><h1>{name}</h1>)} */}
    </div>
  )
}

export default App;
