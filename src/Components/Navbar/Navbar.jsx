import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { default as BootstrapNav } from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const currenLocation = useLocation();
  const [navPadding, setNavPadding] = useState("py-3");
  const [previousScrollPos, setPreviousScrollPos] = useState(
    window.pageYOffset
  );
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currenScrollPosition = window.pageYOffset;
      setPreviousScrollPos(window.pageYOffset);
      setNavPadding(previousScrollPos > currenScrollPosition ? "py-4" : "py-2");
    });
  }, [navPadding, previousScrollPos]);

  return (
    <BootstrapNav expand="lg" className={"nav-bar " + navPadding}>
      <Container>
        <Link
          to="/"
          className={
            currenLocation.pathname === "/" ? "active nav-logo" : "nav-logo"
          }
        >
          <span className="inner-logo-txt">Start Framework</span>
        </Link>
        <BootstrapNav.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNav.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex flex-lg-row gap-4 pt-4 pt-lg-0 px-2 px-lg-0">
            <Link
              to="about"
              className={
                currenLocation.pathname === "/about"
                  ? "active nav-links"
                  : "nav-links"
              }
            >
              About
            </Link>
            <Link
              to="portfolio"
              className={
                currenLocation.pathname === "/portfolio"
                  ? "active nav-links"
                  : "nav-links"
              }
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              className={
                currenLocation.pathname === "/contact"
                  ? "active nav-links"
                  : "nav-links"
              }
            >
              Contact
            </Link>
          </Nav>
        </BootstrapNav.Collapse>
      </Container>
    </BootstrapNav>
  );
}
