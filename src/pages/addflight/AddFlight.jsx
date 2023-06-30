import React from 'react'
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import SearchedItem from '../../components/searchedItem/SearchedItem'
import {Link} from "react-router-dom";
import "./addflight.css"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { URL } from '../../Baseurl';



function AddFlight() {
    const [flightname,setFlightname]=useState();
    const [flightno,setFlightNo]=useState();
    const [from,setFrom]=useState();
    const [to,setTo]=useState();
    const [day, setAllChecked] = React.useState([]);
   function handleChange(e) {
      if (e.target.checked) {
         setAllChecked([...day, e.target.value]);
      } else {
         setAllChecked(day.filter((item) => item !== e.target.value));
      }
   }
   console.log(day)
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        axios.post(URL+"admin/add-flight", {flightname,flightno,from,to,day})
        .then(result=>{
            console.log(result.data);
            navigate("/DashBoard");
        })
        .catch(e=>console.log(e))
         
        
        
      };

  return (
    <div>
      <div>
      {/* <Navbar username /> */}
      <div className="header">
        <div className="headerContainer">
          <span className="logo">Flight Booking Admin Panel</span>
          <div className="navItems">
            <div className="headerButton1">Admin</div></div>
            {/* <Link to="/login_As_Admin" className="headerButton1">Login As Admin</Link> */}
            <Link to="/login_As_User" className="headerButton1">log Out</Link>
          </div>
        </div>
      <div className="Add">
    
            <form >
    
                <div className="input-box">
                    <span className="details">Flight Name</span>
                    <input type="text" placeholder="Flight Name" required  onChange={(e) => setFlightname(e.target.value)}/>
                    
                    
                </div>
                <div className="input-box">
                    <span className="details">Flight Number</span>
                    <input type="text" placeholder="Flight Number" required onChange={(e) => setFlightNo(e.target.value)}/> 
                </div>
                <div className="input-box">
                    <span className="details">From</span>
                    <input type="text" placeholder="From" required onChange={(e) => setFrom(e.target.value)}/> 
                </div>
                <div className="input-box">
                    <span className="details">To</span>
                    <input type="text" placeholder="To" required onChange={(e) => setTo(e.target.value)}/> 
                </div>
                <div>
                    <span className="details">Day</span>
                    <hr></hr>
                    <span>Sunday</span>
                    <input value = "0" type = "checkbox"  onChange = {handleChange} />
                    <span>Monday</span>
                    <input value = "1" type = "checkbox" onChange = {handleChange}  />
                    <span>Tuesday</span>
                    <input value = "2" type = "checkbox" onChange = {handleChange} />
                    <span>Wednesday</span>
                    <input value = "3" type = "checkbox" onChange = {handleChange}  />
                    <span>Thrusday</span>
                    <input value = "4" type = "checkbox" onChange = {handleChange} />
                    <span>Friday</span>
                    <input value = "5" type = "checkbox" onChange = {handleChange} />
                    <span>Saturday</span>
                    <input value = "6" type = "checkbox" onChange = {handleChange} />
                </div>
                
                
            
    
                <div>
                    <input type="submit" value="Register" onClick={handleClick} />
                </div>
                
            </form>
      </div>
      
        {/* <Featured/>
        
        <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
      </div>
    </div>
    
  )
}

export default AddFlight;
