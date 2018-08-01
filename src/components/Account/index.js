import React, {Component} from 'react';

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
      }
    }
  }

  // async componentWillMount() {
  //   const url = await fetch('https://randomuser.me/api');
  //   const json = await url.json();
  //   const data = json.results[0];
  //   console.log(data);
  // }

  render() {
    return (
      <div className={styles.accountContainer}>
        <img src="/" alt="Name" className={styles.profilePicture} />
        <h5 className={styles.name}>Parker</h5>
      </div>
    )
  }
}