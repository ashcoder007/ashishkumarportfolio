import LocalAssetFigure from "../components/LocalAssetFigure";

// Update this array directly with your actual project information and screenshot paths.
const projects = [
  {
    title: "Tirth Saathi",
    summary: "Smart platform for pilgrims with navigation, crowd updates, and offline access.",
    techStack: ["React", "Node.js", "MongoDB"],
    image: "assets/projects/download (2).jpg",
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "AI Recommendation System",
    summary: "E-commerce platform with machine learning based recommendations.",
    techStack: ["Django", "PostgreSQL", "Machine Learning"],
    image: "/assets/projects/logo.jpg",
    githubUrl: "https://github.com/ashcoder007/Smartshop",
    demoUrl: "",
  },
];

export default function ProjectsPage() {
  return (
    <div className="page">
      <section className="panel page-banner">
        <p className="eyebrow">Projects</p>
        <h1 className="section-title">Project Showcase</h1>
        <p>
          This page highlights my key projects with a focus on visuals and concise descriptions.
        </p>
      </section>

      <section className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <LocalAssetFigure
              alt={`${project.title} preview`}
              hint={`Add a project screenshot to ${project.image}`}
              src={project.image}
              title={`${project.title} image`}
              variant="landscape"
            />

            <div className="project-card__body">
              <p className="project-card__label">Project</p>
              <h2>{project.title}</h2>
              <p className="project-card__summary">{project.summary}</p>

              <div className="tag-list" aria-label={`${project.title} tech stack`}>
                {project.techStack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              {project.githubUrl || project.demoUrl ? (
                <div className="project-card__links">
                  {project.githubUrl ? (
                    <a className="project-link" href={project.githubUrl} rel="noreferrer" target="_blank">
                      GitHub
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a className="project-link" href={project.demoUrl} rel="noreferrer" target="_blank">
                      Live Demo
                    </a>
                  ) : null}
                </div>
              ) : (
                <p className="helper-note">
                  
                </p>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
