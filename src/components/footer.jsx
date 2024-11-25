import Parallax from './parallax';

export const Footer = () => {
  return (
    // max-w-screen-2xl
    <footer>      
      <Parallax />
      <section className="w-full">
        <div className="mx-24 my-auto">
          <h2 className="heading-h2 py-16">GET IN TOUCH</h2>
          <p className="display-text text-center px-96 mb-24">Let's do something amazing! Feel free to get in touch through these contacts. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <div className="grid grid-cols-5 gap-4 content-stretch">
            <div className="contact-card col-start-2 self-center text-center align-center">
              <img src="https://placehold.co/200x200" alt="Email Address" />
              <p>luiscbaptistajr@gmail.co</p>
            </div>
            <div className="contact-card self-center text-center align-center">
              <img src="https://placehold.co/200x200" alt="Mobile Number" />
              <p>1-236-867-1561</p>
            </div>
            <div className="contact-card self-center text-center align-center">
              <img src="https://placehold.co/200x200" alt="LinkedIn" />
              <p>/luiscbaptistajr</p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="max-w-screen-2xl w-full mx-auto px-4 my-10 flex justify-between items-center"></div> */}
      <section className="w-full">
        <div className="mx-24 my-auto pt-24 pb-5 flex justify-between items-center">
          <div className="flex">
            <img 
                src="./images/logo.svg"
                width={30} 
                height={30} 
                alt="Luis Baptista" 
            />
            <p className="pl-5">luiscbaptistajr &copy; 2024</p>
          </div>
          <div className="col-start-3 col-span-5 text-right">
            <a className="px-2" href="">About</a>
            <a className="px-2" href="">Design</a>
            <a className="px-2" href="">Development</a>
            <a className="px-2" href="">GITHUB</a>
            <a className="px-2" href="">Behance</a>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
