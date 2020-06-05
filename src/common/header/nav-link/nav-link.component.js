import React from 'react';
import classes from './nav-link.module.css';
import { NavLink } from 'react-router-dom';
import ReactIf from '../../react-if/react-if.component';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';

const NavbarLink = ({ link, isTitle, title, isMenuOpen, toggleMenu }) => {
  let linkClasses = [classes.link];
  let navClasses = [classes.navbarLink];

  if (isTitle) {
    linkClasses.push(classes.isTitle);
    navClasses.push(classes.navTitle);
  }

  if (isMenuOpen) {
    linkClasses.push(classes.open);
    navClasses.push(classes.navOpen);
  }

  const tryCloseMenu = () => {
    if (isTitle) {
      return;
    }
    toggleMenu();
  };

  const theme = useContext(ThemeContext);

  return (
    <div className={navClasses.join(' ')}>
      <NavLink
        onClick={tryCloseMenu}
        className={linkClasses.join(' ')}
        style={theme.scheme === 'dark' ? { color: theme.foreground } : {}}
        activeClassName={classes.activeLink}
        to={link}
        exact>
        {title}
      </NavLink>
      <ReactIf showIf={isTitle}>
        <div onClick={toggleMenu} className={classes.menuButton}>
          <span
            style={
              theme.scheme === 'dark' ? { background: theme.foreground } : {}
            }></span>
          <span
            style={
              theme.scheme === 'dark' ? { background: theme.foreground } : {}
            }></span>
          <span
            style={
              theme.scheme === 'dark' ? { background: theme.foreground } : {}
            }></span>
        </div>
      </ReactIf>
    </div>
  );
};

export default NavbarLink;
