import featureBG from "/images/nasa/mockup.png";

export const Parallax = () => {
  const imgSrc = {
    backgroundSize: "contain",
    backgroundColor: "#1A5DAC",
    backgroundImage: `url(${featureBG})`
  };
  return (
    <section className="parallax-container" style={imgSrc}></section>  
  )
}

export default Parallax;