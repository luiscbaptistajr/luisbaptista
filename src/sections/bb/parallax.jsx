import featureBG from "/images/bb/mockup.png";

export const Parallax = () => {
  const imgSrc = {
    backgroundSize: "contain",
    backgroundColor: "#5E8DD3",
    backgroundImage: `url(${featureBG})`
  };
  return (
    <section className="parallax-container" style={imgSrc}></section>  
  )
}

export default Parallax;