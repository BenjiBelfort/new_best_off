import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "../styles/navbar.css";
import logo from "/logo-groupe.webp";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  // Utilisation de useCallback pour stabiliser handleScroll
  const handleScroll = useCallback(() => {
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;

    if (window.scrollY > headerHeight) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    closeMenu(); // Ferme le menu lors du scroll
  }, []); // Pas de dépendances, car closeMenu est constant

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Ajout de handleScroll comme dépendance

  return (
    <>
      <header>
        <div className="header_container">
          <Link to="/" onClick={closeMenu}>
            <div className="logo">
              <img src={logo} alt="Logo du groupe Best Off'" />
              <h1>Best Off&apos;</h1>
            </div>
          </Link>
          <nav className="navbar">
            <ul className={`nav-menu ${isActive ? "active" : ""}`}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeMenu}>
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link" onClick={closeMenu}>
                  Actu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={closeMenu}>
                  À propos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={closeMenu}>
                  Photos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={closeMenu}>
                  Partenaires
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/past-events" className="nav-link" onClick={closeMenu}>
                  Événements Passés
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={closeMenu}>
                  Auditions
                </Link>
              </li>
            </ul>
            <div
              className={`hamburger ${isActive ? "active" : ""}`}
              onClick={handleToggle}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </header>

      <button
        className={`scroll-to-top ${showScrollToTop ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        ↑
      </button>
    </>
  );
};

export default Navbar;
