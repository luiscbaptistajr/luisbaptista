export const Specialties = () => {
  return (
    <section className="w-full">
        <div className="mx-24 my-auto skill-package-section section-content">
            <h2 className="section-title-h2">Specialties</h2>
            <div className="specialties-section">
                <div className="row-span-2 specialties-product">
                    <div className="productDes-img"></div>
                    <div className="specialties-box">
                        <h3 className="card-title-h3">Product Design</h3>
                        <p>Product design is one of my greatest strengths and passions. It allows me to express my creativity while channeling my deep appreciation for design interface and user experience.</p>
                    </div>
                </div>

                <div className="flex specialties-product">
                    <div className="productDev-img w-2/4">
                        {/* <img src="https://placehold.co/230x320" alt="" /> */}
                    </div>
                    <div className="specialties-box">
                        <h3 className="card-title-h3">Product Development</h3>
                        <p>My experience building application websites, which has not only honed my strengths but also challenged me to overcome my limitations. My journey has driven me to deeply understand every aspect of the technology stack. It has also given me the opportunity to build frameworks and solutions, enabling me to innovate, adapt, and grow in diverse technical environments.</p>
                    </div>
                </div>

                <div className="flex specialties-product">
                    <div className="specialties-box">
                        <h3 className="card-title-h3">Product Management</h3>
                        <p>Lorem ipsum dolor sit amet. Qui quia minus est soluta explicabo et excepturi quis. Est galisum inventore ut amet vero aut repudiandae galisum id voluptas impedit.</p>
                    </div>
                    <div className="productMgt-img">
                        {/* <img src="https://placehold.co/220" alt="" /> */}
                    </div>
                </div>
                
            </div>
        </div>
        
    </section>
  )
}

export default Specialties;
