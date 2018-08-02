import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

export default class NavItem extends Component {
  constructor() {
    super();
    this.state = {
      active: true,
    }
  }
  render() {
    return (
      <NavLink to={`/${this.props.to}`} className={styles.navItem} activeClassName={styles.activeNavItem}>
        <div className={styles.navIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <g>
              <g fill={'#BBC0C4'}>
                {this.props.children}
              </g>
            </g>
          </svg>
        </div>
        <h3 className={styles.linkText}>{this.props.title}</h3>
      </NavLink>
    )
  }
};