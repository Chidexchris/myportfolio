import '../assets/style/Sidebar.css';
import React, { useEffect, useState } from 'react';

function Side() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="R-sidebar">
      <nav className="menu">
        <ul className="smi">
          <li>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
              <i className="bi bi-house ic"></i>
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
              <i className="bi bi-file-person"></i>
            </a>
          </li>
          <li>
            <a href="#services" className={activeSection === 'projects' ? 'active' : ''}>
              <i className="bi bi-file-code"></i>
            </a>
          </li>
          <li>
            <a href="#gallary" className={activeSection === 'contact' ? 'active' : ''}>
              <i className="bi bi-person-lines-fill"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Side;
