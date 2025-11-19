import { useState } from 'react'

import './App.css';
import HomePage from './pages/homePage';
import AdminPage from './pages/adminPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import Header from './components/header';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  

  return (

    <BrowserRouter>
    <div className="w-full h-screen bg-primary text-secondary">
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
