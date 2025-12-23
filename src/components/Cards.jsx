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
                <h3 className='bv text-start'>Web development</h3>
                <p className='text-start'>I build fast, responsive, and fully functional websites tailored to your business needs. From sleek landing pages to complete web applications, I focus on clean code, intuitive user experience, and modern design. Whether you're starting from scratch or improving an existing idea, I help bring your vision to life with reliable and scalable solutions. </p>
              </div>
              </div>

              <div className="sr-cont">
              <div className="col sr-itm">
                <h3 className='bv text-start'>Wordpress Development</h3>
                <p className='text-start'>I specialize in creating and customizing WordPress websites that are powerful, flexible, and easy to manage. From theme customization to plugin configuration and full-site setup, I ensure your website reflects your brand and functions exactly the way you want. Whether it’s a blog, business website, or e-commerce store, I deliver WordPress solutions that are secure, responsive, and optimized for performance.</p>
              </div>
              </div>

              <div className="sr-cont">
              <div className="col sr-itm">
                <h3 className='bv text-start'>Website revamping</h3>
                <p className='text-start'>If your website feels outdated, slow, or not converting visitors, I can help transform it. I revamp websites to improve design, user experience, functionality, and speed. From redesigning the UI to restructuring the content and adding modern features, I make your existing website look fresh, professional, and aligned with current industry standards. The goal is simple: make your site more attractive, responsive, and effective.</p>
              </div>
              </div>
            </div>
  
          </div>
        </section>


      
    </>
  )
}

export default cards