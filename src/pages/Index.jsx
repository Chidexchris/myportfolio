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










