import '../assets/style/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
import me from "../assets/img/me.jpg";  





function SideBar() {
  return (
    <>
        <div className="L-sidebar">
          <div className="">
            <img src={me} className="pr" alt="img" width={100}/>     
           </div>
          <div className="txt">
            <p><span className='title'>Hi i'm Deratech</span> I craft bespoke, high-converting websites that elevate your brand and deliver real business results. Every site I build is designed with strategy, aesthetics, and user experience in mind — helping you attract your ideal audience, build trust, and seamlessly convert visitors into loyal clients.</p>
          </div>
          <div className="list">
            <ul className="skl">
              <li>Web Developer</li>
              <li>Wordpress Developer</li>
              <li>Website Revamping</li>
              <li> React || Laravel || Javascript Developer</li>
              <li>Turtoring</li>
            </ul>
          </div>
          <div className="social">
            <ul className='social-ul'> 
            <a target='blank' href="https://wa.me/message/R4UQNDGGZWDGJ1"><li><i class="bi bi-whatsapp">
              </i></li>
            </a>
            <a target='blank' href="https://www.facebook.com/chidera.ndulewo.9">

            <li><i class="bi bi-facebook"></i></li>
            </a>
            <a target='blank' href="https://www.instagram.com/deratech001/">

            <li><i class="bi bi-instagram"></i></li>
            </a>
            <a  target='blank'href="https://www.linkedin.com/in/chidera-ndulewo/">

            <li><i class="bi bi-linkedin"></i></li>
            </a>
            <a  target='blank'href="christianchrisdav@gmail.com">

            <li><i class="bi bi-envelope-at-fill"></i></li>
            </a>
            </ul>
          </div>
        </div>
    
    </>
  )
}

export default SideBar