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
      name: data.name.first,
      imageURL: data.picture.large,
      role: 'admin',
    });
    console.log(this.state.name.charAt(0));
  }

  render() {
    const { name, imageURL} = this.state;
    return (
      <div className={styles.accountContainer}>
        <div className={styles.profilePicture} style={{backgroundImage: `url(${imageURL})`}} />
        <h5 className={styles.name}>{name}</h5>
      </div>
    );
  }
}
