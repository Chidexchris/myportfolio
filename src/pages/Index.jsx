import SideBar from './components/SideBar';
import Side from './components/Side';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Home from './pages/Home';
function Index() {
  return (
    <>
     <section style={{display: 'flex', justifyContent:'space-evenly'}}>

    <SideBar/>
    <Home/>
    <Side/>
    </section>
    </>
  )
}

export default Index






import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
import './home.css'; 
import TypingEffect from "../components/TypingEffect";
import Me from '../assets/img/me.jpg'
import Cards from '../components/Cards';
import Gallary from '../components/Gallary';




function Home() {
  return (
    <>
    <section>
      

      <div className="container-fluid hc">
      <div className="">
         <div class="">

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

        <button className='btn text-white btn-lg mt-3' style={{backgroundColor: 'blueviolet'}} >Hire Me</button>
         </div>
      </div>
      </div>

        <section className='abt'>

        <div className='img'>
          <img src={Me} alt="" className='ab-img' width={400}/>
        </div> 
        <div className=''>
          <h1 className='' style={{color:'blueviolet',}}>
            About Me
          </h1>
          <p className='text-white'>I craft bespoke, high-converting websites that elevate your brand and deliver real business results. Every site I build is designed with strategy, aesthetics, and user experience in mind — helping you attract your ideal audience, build trust, and seamlessly convert visitors into loyal clients.</p>
        </div>

        </section>

            <Cards/>
            <Gallary/>


    </section>



       
    </>
  )
}

export default Home