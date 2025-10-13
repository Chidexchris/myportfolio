import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
import Me from '../assets/img/me.jpg'
import '../assets/style/home.css'; 

function About() {
  return (
    <>
    <section className='abt' id='about'>
    
            <div className='img'>
              <img src={Me} alt="" className='ab-img' width={400}/>
            </div> 
            <div className='abt-txt'>
              <h1 className='' style={{color:'blueviolet',}}>
                About Me
              </h1>
              <p className='text-white'>I craft bespoke, high-converting websites that elevate your brand and deliver real business results. Every site I build is designed with strategy, aesthetics, and user experience in mind — helping you attract your ideal audience, build trust, and seamlessly convert visitors into loyal clients.</p>
            </div>
    
            </section>
    </>
  )
}

export default About