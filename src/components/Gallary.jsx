
import '../assets/style/gallary.css'

function Gallary() {
  return (
    <>
    <section className='mt-5 mb-5' id=''>  
      <h1 className='text-center bv'>Projects</h1>
  <div class="gallery">
    <div className="gallary-pdt">

  <div class="gallery-item">
    <img src="../img/baber.PNG" alt="Project 1"/>
    <h3>Project One</h3>
    <a href="https://olisa-sh.netlify.app/">View Details</a>
  </div>
    </div>
    <div className="gallary-pdt">

  <div class="gallery-item">
    <img src="../img/sch001.PNG" alt="Project 2"/>
    <h3>buiseness</h3>
    <a href="#">View Details</a>
  </div>
  </div>
  <div className="gallary-pdt">

  <div class="gallery-item">
    <img src="../img/klean.PNG" alt="Project 3"/>
    <h3>Project Three</h3>
    <a href="#">View Details</a>
  </div>
  </div>

  <div class="gallery-item">
    <img src="../img/est.PNG" alt="Project 4"/>
    <h3>Project Four</h3>
    <a href="#">View Details</a>
  </div>
</div>

        

      </section>
    </>
  )
}

export default Gallary