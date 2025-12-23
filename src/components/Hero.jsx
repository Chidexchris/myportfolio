import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
import '../assets/style/home.css'; 
import TypingEffect from "../components/TypingEffect";
import About from './About';
import Cards from './Cards';
import Gallary from './Gallary';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PopupForm from './PopupForm';


function Hero() {
 const [showPopup, setShowPopup] = useState(false);

  return (

  <>
  <section id='home'>
    <div className="container-fluid hc">
      <div className="">

        <h1 className="pb-5" style={{color:'blueviolet',}}> Hello I'm a
           <TypingEffect 
        texts={[
          "Web Developer 💻",
          "Wordpress Developer🌐",
          "React Developer",
          "Laravel Developer",
          "Javascript Developer"
        ]}
        typingSpeed={100}
        deletingSpeed={60}
        pauseTime={1500}
      />
      
        </h1>
        <p className='text-white txt'>I craft bespoke, high-converting websites that elevate your brand and deliver real business results. Every site I build is designed with strategy, aesthetics, and user experience in mind — helping you attract your ideal audience, build trust, and seamlessly convert visitors into loyal clients.</p>

        <Link className='btn text-white btn-lg mt-3' style={{backgroundColor: 'blueviolet'}}  onClick={()=> setShowPopup(true)}>
        Hire Me
        </Link>
         </div>
      </div>
      <PopupForm show={showPopup} onClose={() => setShowPopup(false)} />

      <About/>
      <Cards/>
      <Gallary/>
      <Footer/>

      </section>
  </>
  )
}

export default Hero
