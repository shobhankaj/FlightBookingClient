import {useState} from 'react'
import './adminlogin.css'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from '../../Baseurl'
function AdminLogin() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  console.log(email);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    axios.post(URL+"auth/login/Admin", {email,password})
    .then(result=>{
      console.log(result);
      if(result.data=="success"){
        navigate('/DashBoard');
      }
    })
    .catch(e=>console.log(e))
    
    
    
  };
  
  return (
    <>
      <Header/>  
    <div className="container">
        <div className="title">Login As Admin</div>
        <div className="content">
            <form>
                <div className="input-box">
                    <span className="details">Admin  Email</span>
                    <input type="email" placeholder="Enter your username" required onChange={(e) => setEmail(e.target.value)}/> 
                </div>
                
                <div class="input-box">
                    <span class="details">Password</span>
                    <input  placeholder="Enter your password" type="password"
              required
              minLength="6" 
              onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="button">
                <input type="submit" value="Login" onClick={handleClick} />
                </div>
            </form>
        </div>
      
    </div>
    <MailList/>
    <Footer/>
    </>
  )
}

export default AdminLogin
