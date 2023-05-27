import React from 'react'
import {useNavigate } from 'react-router-dom';
import store from '../store/index';

function Login() {
  let navigate = useNavigate();

     function submitHandler(e){        
        let currentUser = null;
       
        e.preventDefault();
         let email = e.target.email.value;
         let password = e.target.password.value;
         let user = localStorage.getItem(email);
        if(user)
            {  
              currentUser = JSON.parse(user);
              console.log(currentUser.password)
               if(password === currentUser.password)
                 {
                  alert("you logged in successfully")
                   store.dispatch({type:'LOGIN', payload:currentUser})
                   sessionStorage.setItem("user", currentUser.email);
                   navigate("/profile")
                 }
                 else
                 alert("Wrong password ty again!")
            }
        else
            {
              alert("User dont exist go to Signup page");
              navigate("/signup");
            }
    }

  return (
    <div className='container'>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <input type="email" name="email" placholder="Email"/>
            <input type="password" name="password" placholder="Password"/>
            <button type="submit" >Login</button>
        </form>
    </div>
  )
}

export default Login