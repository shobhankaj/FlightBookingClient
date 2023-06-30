import React from 'react'
import "./showflight.css"
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import FlightItem from "../../components/flight/FlightItem"
import { URL } from '../../Baseurl';


function ShowFlight() {
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(URL+"admin/list-flight").then((res) => setData(res.data));
      };

      useEffect(() => {
        fetchInfo();
      }, []);
      console.log("data"+data);
  return (
    <div>
        <div className="header">
        <div className="headerContainer">
          <span className="logo">Flight Booking Admin Panel</span>
          <div className="navItems">
            <div className="headerButton1">Admin</div></div>
            {/* <Link to="/login_As_Admin" className="headerButton1">Login As Admin</Link> */}
            <Link to="/login_As_User" className="headerButton1">log Out</Link>
          </div>
        </div>
        <center>List Of Flight</center>
        { data.map((dataObj, index) => {
          return(
            <FlightItem flightname={dataObj.flightname} flightno={dataObj.flightno} from={dataObj.from} to={dataObj.to} id={dataObj._id} />
          );
        })}

        <MailList/>
        <Footer/>
      
    </div>
  )
}

export default ShowFlight
