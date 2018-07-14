import React from 'react';
import styles from './styles.scss';

import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import ScrollContainer from '../components/ScrollContainer';
import MenuItem from '../components/MenuItem';

const App = () => (
  <div className={styles.grid}>
    <TopBar />
    <SideBar />
    <ScrollContainer>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </ScrollContainer>
  </div>
);

export default App;
