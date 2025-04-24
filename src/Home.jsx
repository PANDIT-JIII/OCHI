import Cards from "./Cards"
import About from "./components/About"
import Featured from "./components/Featured"
import Featured1 from "./components/Featured1"
import Featured2 from "./components/Featured2"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import Reviews from "./components/Reviews"
import Eyes from "./Eyes"
import Eyes1 from "./Eyes1"
import Footer from "./Footer"
import LocomotiveScroll from 'locomotive-scroll';

function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
         <Navbar/>
         <LandingPage/>
         <Marquee/>
         <About/>
         <Eyes/>
         <Featured/>
         <Featured1/>
         <Featured2/>
         <Reviews/>
         <Cards/>
         <Eyes1/>
         <Footer/>
    </div>
  )
}

export default Home