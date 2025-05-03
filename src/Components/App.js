import "./App.css";
import Prenavbar from "./Components/Prenavbar";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider.js"
import data from "./data/data.json";
import Offers from "./Components/Offers.js";
import Heading from "./Components/Heading.js";
import StarProducts from "./Components/StarProducts.js";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu.js";
import HotAccessories from "./Components/HotAccessories.js";
import ProductReviews from "./Components/ProductReviews.js";
import Banner from "./Components/Banner.js";
import Footer from "./Components/Footer.js";
import NavOptions from "./Components/NavOptions.js"


function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />


      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop}
      fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>


      <Slider start={data.banner.start} />
      <Offers offer = {data.offer}/>
      <Heading text= "STAR PRODUCTS" /> {/* Giving the Heading */}
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />{/* Giving the Heading */}
      <HotAccessoriesMenu />
      
    
       <Routes>
     <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/> {/* If we can't write exact keyword ten if the any content which matches to the music then they will give that . Ex --> if we need /music then it will give the /music/song  exact means only rhat part*/}
     <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
     <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>
     <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>
     <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>        
     </Routes>
    
     <Heading text="PRODUCT REVIEWS" />

     <ProductReviews productReviews={data.productReviews}/>

   <Heading text="IN THE PRESS" />
   <Banner banner={data.banner} />
 <Footer footer={data.footer}/>

      </Router>
      
  );
}
export default App;
