import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import SearchedFlight from "./pages/searchedFlight/SearchedFlight";
import AdminDashboard from "./pages/DashBord/AdminDashboard";
import AddFlight from "./pages/addflight/AddFlight";
import ShowFlight from "./pages/showflight/ShowFlight";
function App() {
  const user= sessionStorage.getItem('username');
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={user ? <Home/> : <Login/>}/>
        <Route path="/register" element={ <Registration/>}/>
        <Route path="/login_As_User" element={<Login/>}/>
        <Route path="/login_As_Admin" element={<AdminLogin/>}/>
        <Route path="/searched-Flight" element={user ? <SearchedFlight/> : <Login/>}/>
        <Route path="/DashBoard" element={<AdminDashboard/>}></Route>
        <Route path="/Add-Flight" element={<AddFlight/>}> </Route>
        <Route path="/Show-Flight" element={<ShowFlight/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
