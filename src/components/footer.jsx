
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    // max-w-screen-2xl
    <footer>      
      <section className="w-full">
        <div className="mx-24 my-auto contact-section">
          <h2 className="section-title-h2">GET IN TOUCH</h2>
          <p className="display-text text-center px-96 mb-24">Let's do something amazing! Feel free to get in touch through my LinkedIn. <br />I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <div className="grid content-stretch">
            {/* <div className="contact-card col-start-2 self-center text-center align-center">
              <img src="./images/mailbox.png" alt="Email Address" />
              <p>luiscbaptistajr@gmail.com</p>
            </div> */}
            {/* <div className="contact-card self-center text-center align-center">
              <img src="./images/phone-alt.png" alt="Mobile Number" />
              <p>1-236-867-1561</p>
            </div> */}
            <div className="contact-card self-center text-center align-center">
              <Link to="https://www.linkedin.com/in/luiscbaptistajr/" target="_blank"><img src="./images/linkedin.png" alt="LinkedIn" /></Link>
              <p><Link to="https://www.linkedin.com/in/luiscbaptistajr/" target="_blank">/luiscbaptistajr</Link></p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="max-w-screen-2xl w-full mx-auto px-4 my-10 flex justify-between items-center"></div> */}
      <section className="w-full bg-white">
        <div className="mx-24 my-auto flex justify-between items-center footer-link-section">
          <div className="flex">
            <img 
                src="./images/logo-footer.svg"
                width={30} 
                height={30} 
                alt="Luis Baptista" 
            />
            <p className="pl-5">luiscbaptistajr &copy; 2024</p>
          </div>
          <div className="col-start-3 col-span-5 text-right">
            <Link className='px-2' to="/about">About</Link>
            <Link className='px-2' to="/design">Design</Link>
            <Link className='px-2' to="/development">Development</Link>
            {/* <a className="px-2" href="/about">About</a>
            <a className="px-2" href="/design">Design</a>
            <a className="px-2" href="/development">Development</a> */}
            <a className="px-2" target="_blank" href="https://github.com/luiscbaptistajr">GITHUB</a>
            {/* <a className="px-2" href="">Behance</a> */}
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
