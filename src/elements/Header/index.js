import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Header = (props) => {
  return (
    <div>
      <h3 className={styles.subTitle}>{props.title}</h3>
      <p className={styles.description}>
        {props.description}
      </p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
