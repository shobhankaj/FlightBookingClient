import React from 'react'
import "./searchedItem.css";

import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { URL } from '../../Baseurl';

function SearchedItem(props) {
  const username = sessionStorage.getItem("username");
  console.log(username);
  const id=props.id;
  console.log(id);
  const handleClick = async (e) => {
    e.preventDefault();
    axios.put(URL+"user/booked/"+id,{username})
    .then(result=>{
        console.log(result.data);
        if(result.data==="success"){
          toast("flight booked :)")
        }
    })
    .catch(e=>console.log(e))
     
    }
  return (
    <div className="searchedItem">
      <div className="flightName">{props.flightname}</div>
      <div className="from">
        <div>{props.from}</div>
        <div>05:45</div>
      </div>
      <div className="to">
        <div>{props.to}</div>
        <div>06:45</div>
      </div>
      <button className="headerBtn"  onClick={handleClick}>
        BOOK
      </button>
     
    </div>
  )
}

export default SearchedItem
