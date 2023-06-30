import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";




const Home = () => {
  
  return (
    <div>
      {/* <Navbar username /> */}
      <Navbar />
      <div className="homeContainer">
        {/* <Featured/>
        
        <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};



export default Home;