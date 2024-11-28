export const Education = () => {
    return (
      <section className="w-full">
        <div className="mx-24 my-auto grid grid-cols-2 gap-4 education-section">
          <h2 className="col-span-2 section-title-h2">Education</h2>
          <div className="col-start-2 course-detail">
            <div>
              <p><small>Present</small></p>
              <h3 className="section-title-h3">Post-Degree Diploma in Web and Mobile App Design and Development</h3>
              <p className="body-text-p1">I am taking up a Post-Degree Diploma program specializing in the Web and Mobile App, Designer Stream. In an era where digital experiences shape the way we interact and engage, this stream offers an unparalleled opportunity to craft intuitive, visually stunning, and user-centric interfaces that transcend boundaries.</p>
              <p className="body-text-p1">As a Web and Mobile App Designer, I will wield the power to transform ideas into interactive realities, bridging the gap between imagination and functionality. With each stroke of design and every line of code, I will contribute to the creation of seamless user experiences that effortlessly navigate across devices and platforms. This stream not only equips me with the technical skills to breathe life into visions but also nurtures my innate creativity, enabling me to sculpt designs that leave a lasting impact.</p>
            </div>
          </div>
          <div className="col-start-1 row-start-2 school-logo langara">
            <img src="./images/langara.svg" alt="" />
          </div>

          <div className="course-detail">
            <div>
              <h3 className="section-title-h3">Bachelor of Science in Information Technology</h3>
              <p className="body-text-p1">I graduated with a course of a Bachelor of Science in Information Technology. This course embodies the fusion of my passion for innovation, problem-solving, and the ever-evolving digital landscape. Information Technology isn't merely a field; it's a gateway to a world where creativity and logic intertwine to reshape how we live, work, and connect.</p>
              <p className="body-text-p1">What I find most captivating is the dynamic nature of this field. It demands continuous learning, pushing me to stay current with the latest advancements and adapt to rapid changes. As technology becomes increasingly ingrained in our lives, my choice to pursue Information Technology is a commitment to being at the forefront of innovation and progress. It's about being part of a community that thrives on collaboration and uses code to write the future.</p>
            </div>
          </div>
          <div className="school-logo adnu">
            <img src="./images/adnu.svg" alt="" />
          </div>
        </div>
      </section>
    )
  }
  
  export default Education;
  