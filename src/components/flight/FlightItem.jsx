import React from 'react'
import "./flight.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL } from '../../Baseurl';

function FlightItem(props) {
    const navigate = useNavigate();

    const id=props.id;
    const handleClick = async (e) => {
        e.preventDefault();
        axios.delete(URL+"admin/flight-delete/"+id)
        .then(result=>{
            console.log(result.data);
            if(result.data==="success"){
                navigate('/Show-Flight')
                window.location.reload();
            }
        })
        .catch(e=>console.log(e))
         
        }
        
  return (
    <div>
    <div className="searchedItem">
      <div className="flightName">{props.flightname}</div>
      <div className="flightName">{props.flightno}</div>
      <div className="from">
        <div>{props.from}</div>
      </div>
      <div className="to">
        <div>{props.to}</div>
      </div>
      <button className="headerBtn"  onClick={handleClick}>
        Delete
      </button>
     
    </div>
      
    </div>
  )
}

export default FlightItem
