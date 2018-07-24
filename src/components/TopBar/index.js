import React, { Component } from 'react';

import styles from './styles.scss';

import Logo from './../Logo';

export const TopBar = () => (
  <div className={styles.background}>
    <div className={styles.container}>
      <Logo fill="#000" />
    </div>
  </div>
);

export default TopBar;