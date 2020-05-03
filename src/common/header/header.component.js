import React, { useEffect, useState } from "react";
import NavbarLink from "./nav-link/nav-link.component";
import classes from "./header.module.css";



const Header = () => {
  const [windowIsScrolled, setWindowIsScrolled] = useState(false);

  const handleScroll = () => {
    const pageOffset = window.pageYOffset;
    setWindowIsScrolled(pageOffset > 40);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();
    }, { passive: true })
  })

  const headerClasses = [classes.Header];

  if (windowIsScrolled) {
    headerClasses.push(classes.HeaderDark)
  }
  return (
    <div className={headerClasses.join(' ')}>
      <div className={classes.NavBar}>
        <NavbarLink link="/" title="Faisal Rashid" isTitle />
        <NavbarLink link="/blogs" title="Blogs" />
        <NavbarLink link="/games" title="Games" />
        <NavbarLink link="/libraries" title="Libraries" />
        <NavbarLink link="/about" title="About Me" />
        {/* <NavbarLink link="/sign-in" title="Login" />
        <NavbarLink link="/write-new" title="Write New" />
        <NavbarLink link="/admin" title="Admin" /> */}
      </div>
    </div>
  );
};

export default Header;
