import React, { Component } from 'react';
import styles from './styles.scss';
export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      hidden: false,
    };
  }
  render() {
    return (
      <div className={this.state.hidden ? styles.hidden : styles.background}>
        <div className={styles.container}>
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}
