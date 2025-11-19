import { useState } from 'react'

import './App.css';
import ProductCard from './components/productCard';
import Header from './components/header';

function App() {
  

  return (
    
    <div className= "w-[500px] h-[500px] border-amber-500 bg-emerald-300 flex justify-center "  >
      <div className="w-[400px] h-[400px] border-b-cyan-500 bg-amber-700 relative flex flex-col items-center">
        <div className="w-[100px] h-[100px] bg-[red] flex justify-center  "></div>
        <div className="w-[100px] h-[100px] bg-[yellow]"></div>
        <div className="w-[100px] h-[100px] bg-[purple] flex items-center absolute left-[50px] top-[50px]"></div>
      </div>

    </div>
  )
}

export default App;
