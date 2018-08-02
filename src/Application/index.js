import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './styles.scss';

import { 
  TopBar,
  SideBar, 
  ScrollContainer
} from '../components';

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

export default withRouter(App);
