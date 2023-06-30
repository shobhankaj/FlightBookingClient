import {useState } from 'react'
import './login.css'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from '../../Baseurl'
function Login() {
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const [Error, setError] = useState('')

  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if(!username || !password){
      setError("Please fill all the details !")
    }
    else {
      axios.post(URL+"auth/login", {username,password})
      .then(result=>{
        console.log(result.data[0]);
        if(result.data[0] ==="success"){
            sessionStorage.setItem('username',username);
            navigate('/Home');
            window.location.reload();
        }
        else{
          setError("Invalid Credential !")
        }
    })
    .catch(e=>console.log(e))
    }    
     
    
    
  };
  
  return (
    <>
      <Header/>  
    <div className="container">
        <div className="title"><span>Login</span></div>
        <div className="content">
            <span>{Error}</span>
            <form>
                <div className="input-box">
                    <span className="details">Username</span>
                    <input type="text" placeholder="Enter your username" required onChange={(e) => setUsername(e.target.value)}/> 
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

export default Login
