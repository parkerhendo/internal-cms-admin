import React, { Component } from 'react';

import fetch from 'node-fetch';

import styles from './styles.scss';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        imageURL: '',
        role: '',
      },
    };
  }

  async componentWillMount() {
    const url = await fetch('https://randomuser.me/api');
    const json = await url.json();
    const data = json.results[0];
    this.setState({
      user: {
        name: data.name.first,
        imageURL: data.picture.large,
        role: 'admin',
      }
    });
  }

  render() {
    const { name, imageURL, role } = this.state.user;
    const username = name.charAt(0).toUpperCase() + name.substr(1, name.length);
    return (
      <div className={styles.accountContainer}>
        <div className={styles.profilePicture} style={{backgroundImage: `url(${imageURL})`}} />
        <h5 className={styles.name}>{username}</h5>
      </div>
    );
  }
}