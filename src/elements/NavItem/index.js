import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SVGInline from "react-svg-inline";

import styles from './styles.scss';

const NavItem = (props) => (
  <NavLink to={`/${props.to}`} className={styles.navItem} activeClassName={styles.activeNavItem}>
    <div className={styles.navIcon}>
      <SVGInline svg={props.icon} />
    </div>
    <h3 className={styles.linkText}>{props.title}</h3>
  </NavLink>
);

NavItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
}

export default NavItem;