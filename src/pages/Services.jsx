
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Dog Walking",
    subtitle: "A little adventure for your best friend.",
    description:
      "Whether your dog needs a midday stroll, some exercise, or just a change of scenery, I'm happy to help keep those tails wagging.",
    details: [
      "30 or 60 minute walks",
      "Individual and small group walks",
      "Walks tailored to your dog's pace and comfort",
    ],
  },
  {
    number: "02",
    title: "Drop-In Visits",
    subtitle: "A friendly face while you're away.",
    description:
      "Sometimes your pets just need someone to stop by and check in. I'll make sure they're fed, comfortable, and getting a little attention while you're out.",
    details: [
      "30 minute visits for dogs and cats",
      "Feeding, fresh water, and bathroom breaks",
      "Playtime, litter care, and basic clean-up",
    ],
  },
  {
    number: "03",
    title: "Pet Sitting",
    subtitle: "Their home. Their routine. Plenty of love.",
    description:
      "Keep your pets comfortable in the place they know best. I'll spend time with them, follow their usual routine, and make sure they're well cared for while you're away.",
    details: [
      "In-home care for dogs and cats",
      "Extended visits and overnight options",
      "Feeding, companionship, and routine care",
    ],
  },
  {
    number: "04",
    title: "House Sitting",
    subtitle: "Enjoy your time away without the worry.",
    description:
      "Whether you're heading away for a weekend or taking a longer trip, I'll look after your home so you can return knowing everything has been cared for.",
    details: [
      "Overnight, weekend, and extended stays",
      "Mail, packages, plants, and general upkeep",
      "Optional home care extras upon request",
    ],
  },
];

function Services() {
  return (
    <div className="services-page">
      <section className="services-intro">
        <p className="eyebrow">THOUGHTFUL CARE, YOUR WAY</p>

        <h1>
          Care for pets, homes, and
          <em> everything in between.</em>
        </h1>

        <p>
          Every pet, home, and routine is a little different.
          Let's find something that works for yours.
        </p>
      </section>

      <section className="services-list">
        {services.map((service) => (
          <article className="service-detail" key={service.number}>
            <div className="service-detail-heading">
              <span className="eyebrow">
                SERVICE {service.number}
              </span>
              <h2>{service.title}</h2>
              <p className="service-subtitle">
                {service.subtitle}
              </p>
            </div>

            <div className="service-detail-content">
              <p>{service.description}</p>

              <ul>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <Link to="/contact" className="text-link">
                Inquire About This Service ↗
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="services-cta">
        <p className="eyebrow">SOMETHING ELSE IN MIND?</p>
        <h2>Let's chat about what you need.</h2>
        <p>
          Have a question or a special request?
          I'd be happy to hear from you.
        </p>
        <Link to="/contact" className="btn">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Services;
