import featureBG from "/images/pu/mockup.png";

export const Parallax = () => {
  const imgSrc = {
    backgroundSize: "contain",
    backgroundColor: "#E7BE9A",
    backgroundImage: `url(${featureBG})`
  };
  return (
    <section className="parallax-container" style={imgSrc}></section>  
  )
}

export default Parallax;