import {
    faCalendarDays,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./searchBox.css";
  import { useState,useEffect } from "react";
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  import Calendar from 'react-calendar';
  import axios from 'axios';
  import 'react-calendar/dist/Calendar.css';
import { URL } from "../../Baseurl";
  
  
  
  const SearchBox = () => {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState(new Date());
    const onDateChange = (newDate) => {
      setDate(newDate);
      console.log(newDate.getDay());
    }
    const navigate = useNavigate();
    const day=date.getDay();


    const handleClick = async (e) => {
      e.preventDefault();
      axios.post(URL+"user/flight-searched", {from,to,day})
      .then(result=>{
        if(result.data.length>0){
          navigate('/searched-Flight' ,{ state: { from,to,date } } );
        }
      })
      .catch(e=>console.log(e))
            
    };

    
  
    return (
        <div className="headerSearch">
          <div className="headerSearchItem">
              From
              <input
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
              />
          </div>
          <div className="headerSearchItem">
              To
              <input
                onChange={(e) => {
                  console.log(e.target.value)
                  setTo(e.target.value)}}
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
              />
          </div>
          <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date, "MM/dd/yyyy")} `}</span>
                  {openDate && (
                    <Calendar
                    onChange={onDateChange}
                    value={date}
                    className="date"
                    showNeighboringMonth={false}
                    locale={"en-US"}
                  />
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleClick} >
                    Search
                  </button>
                </div>
        </div>
    );
  };
  
  export default SearchBox;
  