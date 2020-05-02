import React from "react";
import NavbarLink from "./nav-link/nav-link.component";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.NavBar}>
        <NavbarLink link="/" title="Faisal Rashid" isTitle />
        <NavbarLink link="/blogs" title="Blogs" />
        <NavbarLink link="/games" title="Games" />
        <NavbarLink link="/about" title="About Me" />
        <NavbarLink link="/sign-in" title="Login" />
        <NavbarLink link="/write-new" title="Write New" />
        <NavbarLink link="/admin" title="Admin" />
      </div>
    </div>
  );
};

export default Header;
