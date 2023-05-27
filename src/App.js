import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Header from './pages/Header';



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route index element={<Login/>}/>
        <Route path="signup" element={<Signup/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="*" element={<h1>No page</h1>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
