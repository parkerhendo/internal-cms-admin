import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

const MenuLink = (props) => (
  <NavLink
    to={`/${props.link}`}
    className={styles.link}
    activeClassName={styles.activeLink}
  >
    <div className={styles.content}>
      {props.children}
      <span>{props.link}</span>
    </div>
  </NavLink>
);

export default MenuLink;
