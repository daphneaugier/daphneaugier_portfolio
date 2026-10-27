import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Menu from "../Menu";
import "./index.css";

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("nav-open");

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <header>
      <button
        type="button"
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="main-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav-toggle-bar" aria-hidden="true" />
        <span className="nav-toggle-bar" aria-hidden="true" />
        <span className="nav-toggle-bar" aria-hidden="true" />
      </button>
      <nav
        id="main-menu"
        className={`main-nav${open ? " is-open" : ""}`}
        onClick={(event) => {
          if (event.target.closest("a")) setOpen(false);
        }}
      >
        <Menu className="main-menu" />
      </nav>
      <nav className="download-nav">
        <a
          href="/pdf/CV_DaphneAugier.pdf"
          className="header-button"
          target="_blank"
          rel="noreferrer"
        >
          CV
        </a>
      </nav>
    </header>
  );
}

export default Header
