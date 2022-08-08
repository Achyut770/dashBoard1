import React from "react";
import axios from "axios"
import "../styles/subscription.css";
import "../styles/login.css";
import api from "./api";
import logo from "./image/logo .png"


function Login() {
    const [ loginInput , setLoginInput ] = React.useState({
        userName:"",
        password:""
    })

    const loginChange = (e ) =>{
  setLoginInput((prev)=>{
    return {
        ...prev ,
        [e.target.name] : e.target.value
    }
  })
  console.log(loginInput)
}

    const saveLogin = async  ()=>{
        if(loginInput.userName!=="" && loginInput.password=="" ){
            const res = axios.post(`${api}/login` ,{
                userName:loginInput.userName,
                password:loginInput.password
            } )
        }
        else{
            alert("fill the form first")
        }
    }

  return (
    <div className="aaa">
  <div className="loginContainer">
    <div className="login">
        <div>
  <img src={logo} alt="#" className="login_logo" />
        </div>
        <div className="login_inputs">
            <div className="username_password">
                <span>Username:</span>
            <input  type="text" onChange={loginChange} name="userName" className="loginUser" value={loginInput.userName} placeholder="Username" />
            </div>
            <div className="username_password">
                <span>Password:</span>
            <input  type="text" onChange={loginChange} name="password" className="loginUser" value={loginInput.password} placeholder="Password" />
            </div>
        </div>
        <div>
        <button className="login_button" onClick={saveLogin}>log in </button>
        </div>
    </div>
  </div>
        </div>
  );
}
export default Login;
