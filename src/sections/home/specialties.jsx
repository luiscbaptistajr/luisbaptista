export const Specialties = () => {
  return (
    <section className="w-full">
        <div className="mx-5 my-auto skill-package-section section-content lg:mx-24">
            <h2 className="section-title-h2">Specialties</h2>
            <div className="specialties-section">
                <div className="row-span-2 specialties-product">
                    <div className="productDes-img"></div>
                    <div className="specialties-box">
                        <h3 className="card-title-h3">Product Design</h3>
                        <p>Product design is one of my greatest strengths and passions, as it allows me to seamlessly blend creativity with functionality. Through this discipline, I can express my innovative ideas while channeling my strong appreciation for intuitive design interfaces and exceptional user experiences. I take pride in crafting solutions that are not only visually appealing but also practical and user-centered, ensuring that every interaction feels natural and engaging. This synergy between creativity and empathy fuels my commitment to designing products that truly resonate with users.</p>
                    </div>
                </div>

                <div className="flex specialties-product">
                    <div className="productDev-img w-2/4">
                        {/* <img src="https://placehold.co/230x320" alt="" /> */}
                    </div>
                    <div className="specialties-box">
                        <h3 className="card-title-h3">Product Development</h3>
                        <p>My experience in building application websites has refined my strengths and pushed me to overcome my limitations. This journey has led me to develop a deep understanding of every aspect of the technology stack. It has also allowed me to design frameworks and solutions that foster innovation, adaptability, and growth in diverse technical environments.</p>
                    </div>
                </div>

                <div className="flex specialties-product">
                    <div className="specialties-box">
                        <h3 className="card-title-h3">Product Management</h3>
                        <p>Product management is a skill I discovered and honed while leading a team and collaborating on various projects during my studies in Web and Mobile App Design and Development. Through these experiences, I developed the ability to define project goals, prioritize features, coordinate cross-functional efforts, and ensure successful project delivery. This hands-on exposure taught me how to align team efforts with user needs and business objectives, emphasizing effective communication, problem-solving, and adaptability in dynamic environments.</p>
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
