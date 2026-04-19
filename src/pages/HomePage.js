import { Link } from "react-router-dom";
import LocalAssetFigure from "../components/LocalAssetFigure";

// Update this object directly with your real profile details and asset paths.
const profile = {
  name: "Ashish Kumar",
  headline: "Full Stack Developer | AI Enthusiast | Problem Solver",
  about:
    "Computer Science student skilled in full-stack and AI development. This portfolio is structured to present my profile, project work, and certificates in a clean academic format.",
  profileImage: "/assets/profile/Ashish Kumar.jpg",
  resumePath: "/assets/resume/Ashish_Resume2.pdf",
  skills: ["React", "Node.js", "MongoDB","SQL", "Django", "PostgreSQL", "Machine Learning","Python", "Java", "C++", "Git", "Docker","GCP"],
  education: [
    {
      institution: " Acropolis Institute of Technology and Research, Indore",
      degree: "Bachelor of Technology",
      detail: "CGPA: 7.14/10, Course: Computer Science and Information Technology",
    },
  ],
  email: "ashish232019@gmail.com",
  phone: "9142569558",
  location: "Indore, Madhya Pradesh",
  linkedinUrl: "https://www.linkedin.com/in/ashish-kumar-8605042a5/",
  githubUrl: "https://github.com/ashcoder007",
};

const trainingAndInternship = [
  {
    title: "MERN Training",
    organization: "Acropolis Institute of Technology",
    duration: "Two Months",
    detail:
      "Completed a two month training in MERN where I learned the MERN stack, deployment workflow, and practical full stack development by building an ERP site.",
  },
  {
    title: "LLM Post Training Intern",
    organization: "Ethara AI",
    duration: "Three Months",
    detail:
      "Working as an LLM post training intern, gaining hands on experience with post training tasks and applied AI workflows in a professional environment.",
  },
];

const spotlightLinks = [
  {
    title: "Projects",
    description: "Browse compact project cards with stacks, screenshots, and optional demo links.",
    to: "/projects",
  },
  {
    title: "Certificates",
    description: "Show certificate images and issuers in a clean academic gallery.",
    to: "/certificates",
  },
  {
    title: "Contact",
    description: "Share direct links and use the static contact form to draft an email quickly.",
    to: "/contact",
  },
];

export default function HomePage() {
  const socialLinks = [
    profile.linkedinUrl ? { label: "LinkedIn", href: profile.linkedinUrl } : null,
    profile.githubUrl ? { label: "GitHub", href: profile.githubUrl } : null,
  ].filter(Boolean);

  return (
    <div className="page page--home">
      <section className="hero panel panel--hero">
        <div className="hero__copy">
          <p className="eyebrow">College Submission Portfolio</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__about">{profile.about}</p>

          <div className="tag-list" aria-label="Skills preview">
            {profile.skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <Link className="button" to="/projects">
              Explore Projects
            </Link>
            <Link className="button button--ghost" to="/contact">
              Contact Me
            </Link>
            {profile.resumePath ? (
              <a className="text-link" download href={profile.resumePath}>
                Download Resume
              </a>
            ) : null}
          </div>

          {!profile.resumePath ? (
            <p className="helper-note">
              Add your resume PDF path in <code>HomePage.js</code> to show the download button.
            </p>
          ) : null}
        </div>

        <LocalAssetFigure
          alt={`${profile.name} profile`}
          hint="Add your profile photo to /public/assets/profile/ashish-kumar.jpg"
          src={profile.profileImage}
          title="Profile photo"
          variant="portrait"
        />
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="section-header">
            <p className="eyebrow">Profile</p>
            <h2 className="section-title">Bio and academic direction</h2>
          </div>
          <p className="section-copy">
            Motivated B.Tech. student with strong technical skills, seeking an entry-level role to apply my knowledge, 
            grow through continuous learning, and contribute to organizational success through dedication and innovation. 
          </p>
        </article>

        <article className="panel">
          <div className="section-header">
            <p className="eyebrow">Snapshot</p>
            <h2 className="section-title">Quick contact details</h2>
          </div>

          <dl className="detail-list">
            <div className="detail-list__row">
              <dt className="detail-label">Email</dt>
              <dd className="detail-value">{profile.email}</dd>
            </div>
            <div className="detail-list__row">
              <dt className="detail-label">Phone</dt>
              <dd className="detail-value detail-value--muted">
                {profile.phone || "Add your phone number here"}
              </dd>
            </div>
            <div className="detail-list__row">
              <dt className="detail-label">Location</dt>
              <dd className="detail-value detail-value--muted">
                {profile.location || "Add your city and state here"}
              </dd>
            </div>
          </dl>

          {socialLinks.length ? (
            <div className="contact-link-list">
              {socialLinks.map((item) => (
                <a className="contact-link" href={item.href} key={item.label} rel="noreferrer" target="_blank">
                  {item.label}
                </a>
              ))}
            </div>
          ) : (
            <p className="helper-note">
              Add your LinkedIn and GitHub URLs in <code>HomePage.js</code> when those profiles are ready.
            </p>
          )}
        </article>
      </section>

      <section className="panel">
        <div className="section-header">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Technical strengths</h2>
        </div>

        <div className="skills-grid">
          {profile.skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-header">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic record</h2>
        </div>

        <div className="education-grid">
          {profile.education.map((item) => (
            <article className="education-card" key={`${item.institution}-${item.degree}`}>
              <h3>{item.institution}</h3>
              <span>{item.degree}</span>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Training and internship</h2>
        </div>

        <div className="education-grid">
          {trainingAndInternship.map((item) => (
            <article className="education-card" key={`${item.title}-${item.organization}`}>
              <h3>{item.title}</h3>
              <span>
                {item.organization} | {item.duration}
              </span>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-strip">
        {spotlightLinks.map((item) => (
          <Link className="feature-card" key={item.to} to={item.to}>
            <p className="eyebrow">{item.title}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
