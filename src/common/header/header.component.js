import React, { useEffect, useState } from "react";
import NavbarLink from "./nav-link/nav-link.component";
import classes from "./header.module.css";

const Header = () => {
  const [windowIsScrolled, setWindowIsScrolled] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const pageOffset = window.pageYOffset;
    setWindowIsScrolled(pageOffset > 40);
  };

  const onToggleMenu = () => {
    setMenuOpen(curr => {
      return !curr;
    })
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        handleScroll();
      },
      { passive: true }
    );
  });

  const headerClasses = [classes.Header];

  if (windowIsScrolled) {
    headerClasses.push(classes.HeaderDark);
  }

  if (isMenuOpen) {
    headerClasses.push(classes.open);
  }

  return (
    <div className={headerClasses.join(" ")}>
      <div className={classes.NavBar}>
        <NavbarLink
          link="/"
          title="Faisal Rashid"
          isTitle
          isMenuOpen={isMenuOpen}
          toggleMenu={onToggleMenu}
        />
        <NavbarLink toggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} link="/blogs" title="Blogs" />
        <NavbarLink toggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} link="/games" title="Games" />
        <NavbarLink toggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} link="/libraries" title="Libraries" />
        <NavbarLink toggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} link="/about" title="About Me" />
        {/* <NavbarLink link="/sign-in" title="Login" />
        <NavbarLink link="/write-new" title="Write New" />
        <NavbarLink link="/admin" title="Admin" /> */}
      </div>
    </div>
  );
};

export default Header;
