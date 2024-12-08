export const Wireframes = () => {
    return (
      <section className="w-full pb-24">
        {/* mx-24 my-auto grid grid-cols-2 gap-24  */}
        <div className="work-section">
          <h2 className="col-span-2 section-title-h2">Old Design</h2>

          <div className="block-container wgrid temp-position-2">
            <img src="./images/nasa/current-001.jpg" alt="" />
            <img src="./images/nasa/current-002.jpg" alt="" />
          </div>
          
         
          
          <h2 className="col-span-2 section-title-h2">New Design</h2>

          <div className="block-container wgrid temp-position-2">
            
            <div className="gallery-bg">
              <img src="./images/nasa/new-001.png" alt="" />
            </div>
           
            <div className="text-container work-container">
              <h3 className="section-title-h3">Home/Search</h3>
              <p className="body-text-p1">The new layout pages simplify the navigation bar with clear, concise labels. It has use a large, impactful hero image or video. This section can also include quick links to major categories or featured content.
              </p>
              <p className="body-text-p1">Each category should have its own section with a clear heading, icon, and content. Use cards or tiles to present key information or links within each category, maintaining consistent spacing and alignment.</p>
              <p className="body-text-p1">The new layout also prioritize content hierarchy with a focus on readability. Utilize concise paragraphs, and headings to organize information logically.</p>
              <p className="body-text-p1">The bottom navigation link has also been redesigned to emphasize its features and ensure visibility for users with physical impairments.</p>
            </div>
            
          </div>

          <div className="block-container wgrid temp-position-2">
            <div className="text-container work-container">
              <h3 className="section-title-h3">Inner Pages</h3>
              <p className="body-text-p1">Redesigning NASA's app pages with a focus on more spacing, clear identification of categories, and a minimalist layout involves addressing several UI design challenges. The goal is to create a clean, intuitive interface that enhances user interaction while effectively presenting scientific information data.</p>
              <p className="body-text-p1">Added more spacing helps to avoid clutter and makes the content more digestible. This involves strategic use of white space to separate different sections and elements. </p>
            </div>
            <div className="gallery-bg">
              <img src="./images/nasa/new-002.png" alt="" />
            </div>
          </div>
          

        </div>
      </section>
    )
  }
  
  export default Wireframes;
  