import React, { useState } from 'react'
import './Login.css';
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
const Login = ({onLogin}) => {
    const [action,setAction]=useState('');

    const registerLink = () =>
    {
        setAction('  active');
    };
    const loginLink = () =>
    {
        setAction('');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
  };
  return (
    <div className='whole'>
    <div className={`wrapper${action}`}>
    <div className='first'>
        <form action="" onSubmit={handleSubmit}> 
        <center><h1><FaUserCircle className='face' /></h1>
        <h2>LOGIN</h2></center>
        {/* <div className='input'>
            <input type='text' placeholder='First Name' required></input>
            <MdOutlineDriveFileRenameOutline  className='icon'/>
        </div>
        <div className='input'>
            <input type='text' placeholder='Last Name' required></input>
            <MdOutlineDriveFileRenameOutline className='icon'/>
        </div> */}
        <div className='input'>
            <input type='text' placeholder='Email' required></input>
            <MdEmail className='icon'/>
        </div>
        <div className='input'>
            <input type='password' placeholder='password' required></input>
            <RiLockPasswordFill  className='icon'/>
        </div>
        <div className='input'>
            <input type='long' placeholder='Phone Number' required></input>
            <MdOutlinePhone className='icon'/>
        </div>
        <div className='rem'>
        <label><p><input type='checkbox'></input>Remember me</p></label>
        </div>
        <center><button type='submit'>Login</button></center>
        <div className='reg'>
            <center><p>New User ? <a href='#' onClick={registerLink}>Register</a></p></center>
        </div>
        </form>
    </div>
    <div className='second'>
    <form action="" onSubmit={handleSubmit}> 
        <center><h1><FaUserCircle className='face' /></h1>
        <h2>REGISTER</h2></center>
        <div className='input'>
            <input type='text' placeholder='First Name' required></input>
            <MdOutlineDriveFileRenameOutline  className='icon'/>
        </div>
        <div className='input'>
            <input type='text' placeholder='Last Name' required></input>
            <MdOutlineDriveFileRenameOutline className='icon'/>
        </div>
        <div className='input'>
            <input type='email' placeholder='Email' required></input>
            <MdEmail className='icon'/>
        </div>
        <div className='input'>
            <input type='password' placeholder='password' required></input>
            <RiLockPasswordFill  className='icon'/>
        </div>
        <div className='input'>
            <input type='long' placeholder='Phone Number' required></input>
            <MdOutlinePhone className='icon'/>
        </div>
        <div className='log1'>
            <label><p><input type='checkbox'></input>I agree to the terms and conditions</p></label>
        </div>
        <center><button type='submit'>Register</button></center>
        <div className='log'>
            <p>Already have an account ? <a href='#' onClick={loginLink}>login</a></p>
        </div>
        </form>
        </div>
    </div>
    </div>
  )
}
export default Login;
