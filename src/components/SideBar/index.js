import React, { Component } from 'react';
import styles from './styles.scss';
export default class SideBar extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}
