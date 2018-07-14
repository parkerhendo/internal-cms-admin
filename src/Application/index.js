import React from 'react';
import styles from './styles.scss';

import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';

const App = () => (
  <div className={styles.grid}>
    <TopBar />
    <SideBar />
  </div>
);

export default App;
