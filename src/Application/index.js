import React from 'react';
import styles from './styles.scss';

import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import ScrollContainer from '../components/ScrollContainer';

import Routes from '../routes';


const App = () => (
  <div className={styles.grid}>
    <TopBar />
    <SideBar />
    <ScrollContainer>
      <Routes />
    </ScrollContainer>
  </div>
);

export default App;
