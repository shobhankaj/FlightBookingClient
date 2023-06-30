import {useState,useEffect} from 'react'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import SearchedItem from'../../components/searchedItem/SearchedItem'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import {
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./searchBox.css";
import { useNavigate } from "react-router-dom";
import { URL } from '../../Baseurl'



function SearchedFlight() {
  const location = useLocation();
  const[user,setuser]=useState(location.state.user);
  const [openDate, setOpenDate] = useState(false);
  const [from, setFrom] = useState(location.state.from);
  const [to, setTo] = useState(location.state.to);
  const [data, setData] = useState([]);
  const [date, setDate] = useState(location.state.date);
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate.getDay());
  }
  const day=date.getDay();
  const fetchInfo = () => {
    return axios.post(URL+"user/flight-searched", {from,to,day}).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8500/api/user/flight-searched", {from,to})
    .then(result=>{
      if(result.data.length>0){
        navigate('/searched-Flight' ,{ state: { from,to,date } } );
      }
    })
    .catch(e=>console.log(e))
    
    
    
  };

console.log(data);

  return (
    <div>
        <Header/>
        <div className="headerSearch">
          <div className="headerSearchItem">
              From
              <input
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder={from}
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
                placeholder={to}
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
        { data.map((dataObj, index) => {
          return(
            <SearchedItem flightname={dataObj.flightname} from={dataObj.from} to={dataObj.to} id={dataObj._id} />
          );
        })}
          
      
        
        <MailList/>
        <Footer/>
      
    </div>
  )
}

export default SearchedFlight
 