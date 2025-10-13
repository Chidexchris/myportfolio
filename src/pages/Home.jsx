import SideBar from '../components/SideBar';
import Hero from '../components/Hero';
import Side from '../components/Side';
import '../assets/style/home.css'
import Header from '../components/Header';

function Home() {
  return (
    <>
    <Header/>
   <section className='home' style={{display: 'flex', justifyContent:'space-evenly'}}>
   
       <SideBar/>
       <Hero/>
       <Side/>

       
       </section>

    </>
  )
}

export default Home