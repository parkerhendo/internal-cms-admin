import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

const NavItem = (props) => (
  <NavLink to={`/${props.to}`} className={styles.navItem} activeClassName={styles.activeNavItem}>
    <div className={styles.navIcon}>
      {props.children}
    </div>
    <h3 className={styles.linkText}>{props.title}</h3>
  </NavLink>
);

export default NavItem;