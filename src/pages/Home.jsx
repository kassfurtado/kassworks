
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Dog Walking",
    description:
      "A little fresh air, exercise, and one-on-one attention for your pup.",
  },
  {
    number: "02",
    title: "Drop-In Visits",
    description:
      "Feeding, bathroom breaks, playtime, and check-ins while you're away.",
  },
  {
    number: "03",
    title: "Pet Sitting",
    description:
      "Comfortable, familiar care for your pets in their own home.",
  },
  {
    number: "04",
    title: "House Sitting",
    description:
      "Someone you can trust to look after your home while you're away.",
  },
];

function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-content">
          <p className="eyebrow">
            PET & HOUSE CARE • LONDON, ONTARIO
          </p>

          <h1>
            A little peace of mind,
            <em> while you're away.</em>
          </h1>

          <p className="hero-description">
            Thoughtful, reliable care for your pets
            and home in London and Middlesex.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="btn">
              Explore Services
            </Link>

            <Link to="/contact" className="text-link">
              Get in Touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <span>kass.works</span>
          <p>Care that feels personal.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services">
        <div className="section-heading">
          <p className="eyebrow">WHAT I OFFER</p>
          <h2>A helping hand, when you need one.</h2>
          <p>
            From daily walks to overnight stays,
            find the care that works for you.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <Link
              to="/services"
              className="service-card"
              key={service.number}
            >
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="home-about">
        <div>
          <p className="eyebrow">THE PERSON BEHIND KASS.WORKS</p>
          <h2>Hi, I'm Kass!</h2>
        </div>

        <div>
          <p>
            I'm a London local who loves animals,
            appreciates a well-cared-for home,
            and believes a little help can go a long way.
          </p>

          <Link to="/about" className="text-link">
            A Little More About Me <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="home-cta">
        <p className="eyebrow">LET'S CONNECT</p>

        <h2>Need someone to lend a hand?</h2>

        <p>
          Tell me a little about what you're looking for.
          I'd love to hear from you!
        </p>

        <Link to="/contact" className="btn">
          Send an Inquiry
        </Link>
      </section>
    </div>
  );
}

export default Home;
