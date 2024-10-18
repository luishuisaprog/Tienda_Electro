import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer_container'>
          <div className='createBy'>  
              <section className="create_data">
                <p>Create By Jesús Rodriguez</p>
                <i className='bx bx-registered'></i>
              </section>
          
              <section className="contact_container">
          
                <div className="contact_icons">
                  <a href="https://www.linkedin.com/in/jesus-rodriguez-a460171a9/">
                    <i className='bx bxl-linkedin' ></i>
                  </a>    
                </div>

                <div className="contact_icons">
                  <a href="https://www.instagram.com/jesusrodriguezm24/">
                    <i className='bx bxl-instagram' ></i>
                  </a>
                </div>

                <div className="contact_icons">
                  <a href="mailto:jesusrodriguezm24@gmail.com">
                    <i className='bx bx-envelope' ></i>
                  </a>
                </div>

              </section>
          </div>
    </footer>
  )
}
export default Footer