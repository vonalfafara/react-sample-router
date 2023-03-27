import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Doge Coffee is now here!</h1>
          <p>The last coffee you will ever need.</p>
          <div className="hero-buttons">
            <button className="cta">EXPLORE</button>
            <button className="noncta">HIRE ME</button>
          </div>
        </div>
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero