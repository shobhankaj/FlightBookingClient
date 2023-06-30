import React from 'react'
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import SearchedItem from '../../components/searchedItem/SearchedItem'
import {Link} from "react-router-dom";
import "./dashboard.css"
import { useNavigate } from "react-router-dom";



function AdminDashboard() {
    const navigate = useNavigate();

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
        <Link to="/Add-Flight" >Add Flight</Link>
      </div>
      <div className="Add">
      <Link to="/Show-Flight" >Show Flight</Link>
      </div>
        {/* <Featured/>
        
        <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
      </div>
    </div>
    
  )
}

export default AdminDashboard;
