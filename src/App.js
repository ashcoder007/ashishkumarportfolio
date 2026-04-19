import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import CertificatesPage from "./pages/CertificatesPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
