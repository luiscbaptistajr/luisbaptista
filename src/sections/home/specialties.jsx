export const Specialties = () => {
  return (
    <section className="w-full">
        <h2 className="heading-h2">Specialties</h2>
        <div className="specialties-section section-content">
            {/* <div className="special-skills flex-1 w-14 mx-24">
                <img className="special-img m-auto" src="https://placehold.co/200x200" alt="Product Design" />
                <h3 className="special-heading">Product Design</h3>
            </div>
            <div className="special-skills flex-1 w-14 mx-24">
                <img className="special-img m-auto" src="https://placehold.co/200x200" alt="Product Development" />
                <h3 className="special-heading">Product Development</h3>
            </div>
            <div className="special-skills flex-1 w-14 mx-24">
                <img className="special-img m-auto" src="https://placehold.co/200x200" alt="Product Management" />
                <h3 className="special-heading">Product Management</h3>
            </div> */}

            <div className="row-span-2 specialties-product">
                <div className="productDes-img"></div>
                <div className="specialties-box">
                    <h3>Product Design</h3>
                    <p>Lorem ipsum dolor sit amet. Qui quia minus est soluta explicabo et excepturi quis. Est galisum inventore ut amet vero aut repudiandae galisum id voluptas impedit.</p>
                </div>
            </div>

            <div className="flex specialties-product">
                <div className="productDev-img">
                    {/* <img src="https://placehold.co/230x320" alt="" /> */}
                </div>
                <div className="specialties-box">
                    <h3>Product Development</h3>
                    <p>Lorem ipsum dolor sit amet. Qui quia minus est soluta explicabo et excepturi quis. Est galisum inventore ut amet vero aut repudiandae galisum id voluptas impedit.</p>
                </div>
            </div>

            <div className="flex specialties-product">
                <div className="specialties-box">
                    <h3>Product Management</h3>
                    <p>Lorem ipsum dolor sit amet. Qui quia minus est soluta explicabo et excepturi quis. Est galisum inventore ut amet vero aut repudiandae galisum id voluptas impedit.</p>
                </div>
                <div className="productMgt-img">
                    {/* <img src="https://placehold.co/220" alt="" /> */}
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Specialties;
