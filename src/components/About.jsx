import dog from "../assets/dog.jpg"
const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="container">
        <img src={dog} alt="" />
        <div className="about-text">
          <h3>What about me?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic id, omnis voluptatibus illo eius harum earum praesentium odio expedita sint!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus est nulla accusantium modi doloribus inventore magni quia ex suscipit, nisi distinctio eius animi fugit deserunt, nesciunt voluptatibus! Praesentium, ut.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur velit aperiam deleniti aliquid qui!</p>
        </div>
      </div>
    </section>
  )
}

export default About