import "./navbar.css"
import SearchBox from "../searchBox/SearchBox"
import Header from "../header/Header"

const Navbar = () => {
  return (
    <div className="Navbar">
      <Header/>
      <div className="searchbarContainer">
          <SearchBox />
      </div>
      
    </div>
    
  )
}

export default Navbar