
import './App.css';
import HomePage from './pages/homePage';
import AdminPage from './pages/adminPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import TestPage from "./pages/test";

import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgetPasswordPage from "./pages/forgetPasswordPage"

function App() {
  

  return (

    <GoogleOAuthProvider clientId="609754910210-91bsang2cbnq8gm0p718ngrvnsrj1aim.apps.googleusercontent.com">
    <BrowserRouter>
      <Toaster position='top right'/>
    <div className="w-full h-screen bg-primary text-secondary">
    <Routes path="/">
        <Route path="/*" element={<HomePage/>}/>
       
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/test" element={<TestPage />} />
        <Route path="/forgot-password" element={<ForgetPasswordPage />} />
    
    </Routes>
    
    </div>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
