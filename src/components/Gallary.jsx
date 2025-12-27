
import '../assets/style/gallary.css'

function Gallary() {
  return (
    <>
    <section className='mt-5 mb-5' id=''>  
      <h1 className='text-center bv'>Projects</h1>
  <div className="gallery">
    <div className="gallary-pdt">

  <div className="gallery-item">
    <img src="../img/baber.PNG" alt="Project 1"/>
    <h3 className='text-white'>A barbing Salon</h3>
    <a href="https://olisa-sh.netlify.app/">View </a>
  </div>
    </div>
    <div className="gallary-pdt">

  <div className="gallery-item">
    <img src="../img/sch001.PNG" alt="Project 2"/>
    <h3 className='text-white'>A school website</h3>
    <a href="#">View </a>
  </div>
  </div>
  <div className="gallary-pdt">

  <div className="gallery-item">
    <img src="../img/klean.PNG" alt="Project 3"/>
    <h3 className='text-white'>A cleaning website </h3>
    <a href="#">View </a>
  </div>
  </div>

  <div className="gallery-item">
    <img src="../img/est.PNG" alt="Project 4"/>
    <h3 className='text-white'>A Restate website </h3>
    <a href="#">View </a>
  </div>
</div>

        

      </section>
    </>
  )
}

export default Gallary