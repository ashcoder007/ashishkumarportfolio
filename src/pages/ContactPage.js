import { useState } from "react";

// Update this object directly with your active contact information and public links.
const contactDetails = {
  email: "ashish232019@gmail.com",
  phone: "9142569558",
  location: "Indore, Madhya Pradesh",
  linkedinUrl: "https://www.linkedin.com/in/ashish-kumar-8605042a5/",
  githubUrl: "https://github.com/ashcoder007",
};

const defaultFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please add your message.";
  }

  return errors;
}

function createMailtoHref(values) {
  const subject = encodeURIComponent(values.subject.trim());
  const body = encodeURIComponent(
    [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      "",
      values.message.trim(),
    ].join("\n")
  );

  return `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
}

export default function ContactPage() {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage("Please fix the highlighted fields before sending your message.");
      return;
    }

    setStatusMessage("Opening your default email app with a prefilled message.");
    window.location.href = createMailtoHref(formValues);
  }

  return (
    <div className="page">
      <section className="panel page-banner">
        <p className="eyebrow">Contact</p>
        <h1 className="section-title">Get in touch</h1>
        <p>
          Use the direct contact details below or fill out the form to open a prefilled email draft. This keeps the
          portfolio fully static and easy to host anywhere.
        </p>
      </section>

      <section className="contact-grid">
        <article className="contact-card">
          <div className="section-header">
            <p className="eyebrow">Direct Links</p>
            <h2>Contact Details</h2>
          </div>

          <dl className="detail-list">
            <div className="detail-list__row">
              <dt className="detail-label">Email</dt>
              <dd className="detail-value">
                <a className="text-link" href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
              </dd>
            </div>
            <div className="detail-list__row">
              <dt className="detail-label">Phone</dt>
              <dd className="detail-value detail-value--muted">
                {contactDetails.phone || "Add your phone number in ContactPage.js"}
              </dd>
            </div>
            <div className="detail-list__row">
              <dt className="detail-label">Location</dt>
              <dd className="detail-value detail-value--muted">
                {contactDetails.location || "Add your city and state in ContactPage.js"}
              </dd>
            </div>
          </dl>

          <div className="contact-link-list">
            {contactDetails.linkedinUrl ? (
              <a className="contact-link" href={contactDetails.linkedinUrl} rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            ) : null}
            {contactDetails.githubUrl ? (
              <a className="contact-link" href={contactDetails.githubUrl} rel="noreferrer" target="_blank">
                GitHub
              </a>
            ) : null}
          </div>

          {!contactDetails.linkedinUrl && !contactDetails.githubUrl ? (
            <p className="helper-note">
              Add your LinkedIn and GitHub URLs in <code>ContactPage.js</code> when you want them visible here.
            </p>
          ) : null}
        </article>

        <article className="contact-card">
          <div className="section-header">
            <p className="eyebrow">Message Form</p>
            <h2>Send a quick note</h2>
          </div>

          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="field-grid">
              <div className="field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your name"
                  type="text"
                  value={formValues.name}
                />
                {errors.name ? <p className="field-error">{errors.name}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  onChange={handleChange}
                  placeholder="you@example.com"
                  type="email"
                  value={formValues.email}
                />
                {errors.email ? <p className="field-error">{errors.email}</p> : null}
              </div>
            </div>

            <div className="field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                type="text"
                value={formValues.subject}
              />
              {errors.subject ? <p className="field-error">{errors.subject}</p> : null}
            </div>

            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                onChange={handleChange}
                placeholder="Write your message here"
                value={formValues.message}
              />
              {errors.message ? <p className="field-error">{errors.message}</p> : null}
            </div>

            <button className="button" type="submit">
              Open Email Draft
            </button>

            {statusMessage ? <p className="form-status">{statusMessage}</p> : null}
          </form>
        </article>
      </section>
    </div>
  );
}
