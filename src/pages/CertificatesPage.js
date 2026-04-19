import LocalAssetFigure from "../components/LocalAssetFigure";

// Update this array directly with your actual certificate image paths.
const certificates = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    year: "",
    image: "/assets/certificates/Cert2.png",
  },
  {
    title: "DBMS",
    issuer: "NPTEL",
    year: "2024",
    image: "/assets/certificates/Cert1.png",
  },
  {
    title: "Google Cloud Career Launchpad",
    issuer: "Google Cloud",
    year: "",
    image: "/assets/certificates/Cert3.png",
  },
];

export default function CertificatesPage() {
  return (
    <div className="page">
      <section className="panel page-banner">
        <p className="eyebrow">Certificates</p>
        <h1 className="section-title">Certificate Gallery</h1>
        <p>
          This page keeps certificates simple and visible. Replace the image paths in this component with your real
          files and the gallery will update automatically.
        </p>
      </section>

      <section className="certificate-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={`${certificate.issuer}-${certificate.title}`}>
            <LocalAssetFigure
              alt={`${certificate.title} certificate`}
              hint={`Add the certificate image to ${certificate.image}`}
              src={certificate.image}
              title={certificate.title}
              variant="certificate"
            />

            <div className="certificate-card__body">
              <h2>{certificate.title}</h2>
              <p className="certificate-card__meta">
                <strong>{certificate.issuer}</strong>
                {certificate.year ? ` | ${certificate.year}` : ""}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
