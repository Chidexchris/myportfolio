import { Link } from "react-router-dom"
function Footer() {
  return (
    <>
    <section>
      <footer className=" text-center text-white" style={{display:'flex', justifyContent:'space-evenly' }}>
  <div className="container p-4 pb-0">
    <p>Copyright@Dtconcepts</p>
    </div>
  <div className="container p-4 pb-0">
    <p>Designed by <Link to='/'>Deratech</Link></p>
    </div>
    </footer>
    </section>
    </>
  )
}

export default Footer