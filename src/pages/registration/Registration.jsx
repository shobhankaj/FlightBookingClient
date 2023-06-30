import {useState} from 'react'
import './registration.css'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { URL } from '../../Baseurl'

function Registration() {
    const [fullname,setFullName]=useState();
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [email,setEmail]=useState();
    const [emailError, setEmailError] = useState('')
    const [usernameError, setusernameError] = useState('')
    const [Error, setError] = useState('')

    const navigate = useNavigate();
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const handleClick = async (e) => {
        e.preventDefault();
        if(!fullname || !email || !password || ! username){
            setError("Please fill all the details !")
        }
         else if(!isValidEmail(email)){
            setEmailError('Enter valid Email!')
        }
        else{
        axios.post(URL+"auth/register", {fullname,username,email,password})
        .then(result=>{
            console.log(result.data);
            if(result.data==="success"){
                navigate('/login_As_User')
            }else if(result.data==="usernameErr"){
                setusernameError("Username should be unique!")
            }
            else{
                setEmailError(' Email should be unique!')
            }
        })
        .catch(e=>console.log(e))
         
        }
        
      };
      
    
  return (
    

    <>
    <Header/>  
    <div className="container">
        <div className="title">Registration</div>
        <div className="content">
            <span>{Error}</span>
            <form>
                <div className="user-details">
                <div className="input-box">
                    <span className="details">Full Name</span>
                    <input type="text" placeholder="Enter your name" required  onChange={(e) => setFullName(e.target.value)}/>
                    
                    
                </div>
                <div className="input-box">
                    <span className="details">Username</span>
                    <input type="text" placeholder="Enter your username" required onChange={(e) => setUsername(e.target.value)}/> 
                    <span>{usernameError}</span>
                </div>
                <div class="input-box">
                    <span class="details">Email</span>
                    <input type="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)}/>
                    <span>{emailError}</span>
                </div>
                
                <div class="input-box">
                    <span class="details">Password</span>
                    <input  placeholder="Enter your password" type="password"
              required
              minLength="6" 
              onChange={(e) => setPassword(e.target.value)}/>
                </div>
    
                <div>
                    <input type="submit" value="Register" onClick={handleClick}/>
                </div>
                </div>
            </form>
        </div>
      
    </div>
    <MailList/>
    <Footer/>
    </>
  )
}

export default Registration
