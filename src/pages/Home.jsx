import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="home">
        <p>Dog Walking • Pet Sitting • House Sitting</p>

        <h1>Pet care you can actually relax about.</h1>

        <p>
          Reliable, thoughtful care for pets and homes in London & Middlesex.
        </p>

        <Link to="/services">View Services</Link>
        <Link to="/contact">Get in Touch</Link>
      </section>

      <section className="home-preview">
        <p>Services</p>

        <h2>Care that fits your routine.</h2>

        <p>
          From walks and drop-ins to pet and house sitting, we'll find the care
          that works for you and your pet.
        </p>

        <Link to="/services">Explore Services →</Link>
      </section>

      <section className="home-preview">
        <p>About</p>

        <h2>Hi, I'm Kass.</h2>

        <p>
          I'm a London-area pet and house sitter who believes good care should
          make life easier for both pets and their people.
        </p>

        <Link to="/about">Meet Kass →</Link>
      </section>

      <section className="home-preview">
        <p>Get Started</p>

        <h2>Tell me about your pet.</h2>

        <p>
          Looking for a walker, sitter or someone to care for your home while
          you're away? Let's see if we're a good fit.
        </p>

        <Link to="/contact">Send an Inquiry →</Link>
      </section>
    </>
  );
}

export default Home;