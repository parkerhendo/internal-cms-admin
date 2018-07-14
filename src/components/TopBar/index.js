import React, { Component } from 'react';

import styles from './styles.scss';

import Logo from './../Logo';

export default class TopBar extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <Logo />
        </div>
      </div>
    );
  }
}
