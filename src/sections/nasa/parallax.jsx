import featureBG from "/images/nasa/mockup.png";

export const Parallax = () => {
  const imgSrc = {
    backgroundSize: "contain",
    backgroundImage: `url(${featureBG})`
  };
  return (
    <section className="parallax-container" style={imgSrc}></section>  
  )
}

export default Parallax;