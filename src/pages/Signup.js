import React from 'react'
import { useState } from 'react';
import store from '../store/index';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate()
    const user = {}

    function submitHandler(e){
        e.preventDefault();
        user.fname = e.target.fullname.value;
        user.email = e.target.email.value;
        user.password = e.target.password.value;
        
        let existUser = JSON.parse(localStorage.getItem(user.email));
        if(existUser)
            alert("user already exist go to profile page")
            else
          {
            localStorage.setItem(user.email, JSON.stringify(user));
            e.target.reset();
            store.dispatch({type:'LOGIN', payload:user})
            setMessage("Successfully Singed Up.")
          }

    }
  return (
    <div className='container'>
        <h1>Signup</h1>
        <form onSubmit={submitHandler}>
            <input type="text" name="fullname" placeholder="Full Name"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="cnfPassword" placeholder="Confirm Password"/>
            <button type="submit" >Signup</button>
            {message && <p className='message'>{message}</p>}
        </form>
    </div>
  )
}

export default Signup