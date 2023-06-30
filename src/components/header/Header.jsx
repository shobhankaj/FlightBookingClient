import "./header.css";
import {useNavigate , Link} from "react-router-dom";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';




const Header = () => {
  const navigate = useNavigate();
  const user=sessionStorage.getItem('username');

  const handleLogOut= async(e)=>{
    e.preventDefault();
    sessionStorage.clear();
    navigate('/login_As_User');
    window.location.reload();
  }
 
  console.log(user);
  const Logged=()=>{
    return (
      <div className="header">
        <div className="headerContainer">
          <span className="logo">Flight Booking</span>
          <div className="navItems">
            <Person2SharpIcon />
            <span className="headerButton1">{user}</span>
            <LogoutOutlinedIcon onClick={handleLogOut}/>
          </div>
        </div>
        
  
      </div>
    );
  }

  const Unlogged=()=>{
    return (
      <div className="header">
        <div className="headerContainer">
          <span className="logo">Flight Booking</span>
          <div className="navItems">
            <Link to="/register"  className="headerButton1">Register</Link>
            <Link to="/login_As_Admin" className="headerButton1">Login As Admin</Link>
            <Link to="/login_As_User" className="headerButton1">Login As User</Link>
          </div>
        </div>
        
  
      </div>
    );
  }
  return (
    <>
      {user ? <Logged/>: <Unlogged/> }
    </>
    
  );
};

export default Header;
