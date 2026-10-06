import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#home">kass.works</a>

          <div>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home">
          <p>Dog Walking • Pet Sitting • House Sitting</p>

          <h1>Pet care you can actually relax about.</h1>

          <p>
            Reliable, thoughtful care for pets and homes in London & Middlesex.
          </p>

          <a href="#services">View Services</a>
          <a href="#contact">Get in Touch</a>
        </section>

        <section id="services">
          <h2>What can I help with?</h2>

          <article>
            <h3>Dog Walking</h3>
            <p>Regular walks tailored to your dog's routine and energy level.</p>
          </article>

          <article>
            <h3>Drop-In Visits</h3>
            <p>
              Feeding, bathroom breaks, playtime and company while you're away.
            </p>
          </article>

          <article>
            <h3>Pet Sitting</h3>
            <p>
              Personal care that keeps your pet comfortable and their routine
              familiar.
            </p>
          </article>

          <article>
            <h3>House Sitting</h3>
            <p>
              Care for your pets and home while you're away, all in one.
            </p>
          </article>
        </section>

        <section id="about">
          <h2>Hi, I'm Kass.</h2>

          <p>
            I'm a London-area pet and house sitter focused on providing
            dependable, thoughtful care while you're away.
          </p>
        </section>

        <section id="why-kass">
          <h2>Care you can count on.</h2>

          <p>Reliable</p>
          <p>Respectful</p>
          <p>Detail-oriented</p>
          <p>Great communication</p>
        </section>

        <section id="how-it-works">
          <h2>How it works</h2>

          <ol>
            <li>Send an inquiry</li>
            <li>We'll arrange a meet & greet</li>
            <li>Confirm your booking</li>
            <li>Relax — I've got it from here</li>
          </ol>
        </section>

        <section id="service-area">
          <h2>Service Area</h2>
          <p>Serving London and surrounding Middlesex communities.</p>
        </section>

        <section id="faq">
          <h2>Frequently Asked Questions</h2>

          <h3>Do you require a meet & greet?</h3>
          <p>
            Yes. I want you, your pet and me to be comfortable before your first
            booking.
          </p>

          <h3>What does house sitting include?</h3>
          <p>
            We'll customize care around your home, pets and normal routine.
          </p>
        </section>

        <section id="contact">
          <h2>Let's talk about your pet.</h2>

          <p>
            Tell me a little about what you need and I'll get back to you.
          </p>

          {/* Contact form coming next */}
        </section>
      </main>

      <footer>
        <p>kass.works</p>
        <p>Pet care • House sitting • London & Middlesex</p>
        <p>Built by Kass Furtado.</p>
      </footer>
    </>
  );
}

export default App;