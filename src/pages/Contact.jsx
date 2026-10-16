
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong. Please email hello@kass.works instead."
      );
    }
  };

  if (submitted) {
    return (
      <section className="contact-page">
        <h1>Thank you for reaching out!</h1>
        <p>
          Your inquiry has been submitted. I'll be in
          touch as soon as I can.
        </p>
        <button onClick={() => setSubmitted(false)}>
          Send another inquiry
        </button>
      </section>
    );
  }

  return (
    <section className="contact-page">
      <h1>Let's get acquainted.</h1>

      <p>
        Looking for thoughtful care for your pets or home?
        Tell me a little about what you need.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />

        <label htmlFor="name">Your name *</label>
        <input
          id="name"
          type="text"
          name="name"
          required
        />

        <label htmlFor="email">Email address *</label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />

        <label htmlFor="service">Service interested in *</label>
        <select id="service" name="service" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option value="Dog Walking">Dog Walking</option>
          <option value="Drop-In Visits">Drop-In Visits</option>
          <option value="Pet Sitting">Pet Sitting</option>
          <option value="House Sitting">House Sitting</option>
          <option value="House Services">House Services</option>
          <option value="Other">Other / Not Sure</option>
        </select>

        <label htmlFor="dates">Preferred dates (optional)</label>
        <input
          id="dates"
          type="text"
          name="dates"
          placeholder="e.g. November 10–15"
        />

        <label htmlFor="message">Tell me a little more *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Tell me about your pet, home, or what you're looking for..."
        />

        <button type="submit">Send Inquiry</button>
      </form>

      <p>
        Prefer email? Reach me at{" "}
        <a href="mailto:hello@kass.works">
          hello@kass.works
        </a>
      </p>
    </section>
  );
}

export default Contact;
