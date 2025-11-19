import { useState } from 'react'

import './App.css';
import Test from './components/test';
import { BrowserRouter } from 'react-router-dom';
function App() {
  

  return (

    <BrowserRouter>
    <div className="w-full h-screen bg-red-400">
    <Routes path="/">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        
    
    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
