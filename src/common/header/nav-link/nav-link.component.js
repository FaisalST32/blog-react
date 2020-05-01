import React from "react";
import classes from "./nav-link.module.css";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ link, isTitle, title }) => {
  let linkClasses = [classes.link];

  if (isTitle) {
    linkClasses.push(classes.isTitle);
  }
  return (
    <div className={classes.navbarLink}>
      <NavLink
        className={linkClasses.join(" ")}
        activeClassName={classes.activeLink}
        to={link}
        exact
      >
        {title}
      </NavLink>
    </div>
  );
};

export default NavbarLink;
