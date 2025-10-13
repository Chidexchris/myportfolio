import '../assets/style/card.css';

function cards() {
  return (
    <>
    <section className='sec' id='services'>
          <h1 className='text-center bv'>
            Service</h1>
          <div className='container-fluid '>
            <div className=" sr-pdt fluid">

              <div className="sr-cont">
              <div className="col sr-itm">
                <h3 className='bv'>Web development</h3>
                <p>we create professional looking website for Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio! Fugit, repellendus dolores amet quo officia necessitatibus quam numquam. </p>
              </div>
              </div>

              <div className="sr-cont">
              <div className="col sr-itm">
                <h3 className='bv'>Wordpress Development</h3>
              </div>
              </div>

              <div className="sr-cont">
              <div className="col sr-itm">
                <h3 className='bv'>Website revamping</h3>
              </div>
              </div>
            </div>
  
          </div>
        </section>


      
    </>
  )
}

export default cards