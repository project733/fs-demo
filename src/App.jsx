import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Footer } from "./components/footer";
import { XYZHeader } from "./components/header";
import { XCAPHeader } from "./components/header/xcap";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Team } from "./components/About/Team";
import { Brands } from "./components/Brands";
import { Xyzcapital } from './components/Brands/xyzcapital';
import { Difference } from "./components/Difference";
import { Contact } from "./components/Contact";

import styles from "./App.module.scss";

export const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const matchPath1 = "/what-we-do/xyzcapital";

  const [isThreshold, setIsThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the value below based on when header need to change style
      setIsThreshold(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {currentPath !== matchPath1 ? (
        <>
          <nav
            className={`${styles.Header} ${
              isThreshold ? styles.fixedHeader : ""
            }`}
          >
            <XYZHeader />
            <ul className={styles.nav}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">Who We Are</NavLink>
                <ul>
                  <li>
                    <NavLink to="/about-us/our-team">Our Team</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/what-we-do">What We Do</NavLink>
              </li>
              <li>
                <NavLink to="/how-we-can-help">Our Social Impact</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <XCAPHeader />
      )}
      <main className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="about-us" element={<About />} />
          <Route path="about-us/our-team" element={<Team />} />
          <Route path="what-we-do" element={<Brands />} />
          <Route path="what-we-do/xyzcapital" element={<Xyzcapital />} />
          <Route path="how-we-can-help" element={<Difference />} />
          <Route path="contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
