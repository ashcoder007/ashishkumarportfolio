import { NavLink, Outlet } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Profile", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

function getNavClassName({ isActive }) {
  return isActive ? "site-nav__link is-active" : "site-nav__link";
}

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="brand-link" to="/">
            <span className="brand-link__kicker">Academic Portfolio</span>
            <span className="brand-link__name">Ashish Kumar</span>
          </NavLink>

          <nav aria-label="Primary" className="site-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                className={getNavClassName}
                end={link.end}
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>Built to showcase profile details, projects, and certificates in one college-ready portfolio.</p>
          <p>
            <a href="mailto:ashish232019@gmail.com">ashish232019@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
