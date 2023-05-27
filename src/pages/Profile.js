import React from 'react'
import store from '../store/index'
import { useNavigate } from 'react-router-dom'

function Profile() {
    let navigate = useNavigate();
    let currentUser;
    let user = sessionStorage.getItem("user");
    if(user)
      currentUser = JSON.parse(localStorage.getItem(user));
      else
      currentUser = store.getState();

    function logoutHandler(){
       
        store.dispatch({type:'LOGOUT', payload:''})
        sessionStorage.removeItem("user");
        alert("user logout")
        navigate('/');
    }
    
  return (
    <div>
        <h1>Profile</h1>
        <h1>Full Name: {currentUser.fname}</h1>       
        <h1>Email: {currentUser.email}</h1>       
        <h1>Password: {currentUser.password}</h1> 
        <button onClick={logoutHandler}>Logout</button>      
    </div>
  )
}

export default Profile