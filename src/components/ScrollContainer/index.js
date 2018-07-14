import React from 'react';

import styles from './styles.scss';

const ScrollContainer = (props) => (
  <div className={styles.scroll}>{props.children}</div>
);

export default ScrollContainer;
