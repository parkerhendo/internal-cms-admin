import React from 'react';

import styles from './styles.scss';

import { 
  Logo, 
  Account 
} from '../../elements';

export const TopBar = () => (
  <div className={styles.background}>
    <div className={styles.container}>
      {/* <Logo fill="#000" /> */}
      <Account />
    </div>
  </div>
);

export default TopBar;