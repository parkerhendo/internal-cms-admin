import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss';

const _ = require('lodash');

const QAItem = (props) => {
  return (
    <div className={styles.QAItem}>
      <h3 className={styles.question}>{props.question}</h3>
      <div className={styles.actions}>
        <p className={_.join([styles.actionBtn, styles.editBtn], ' ')}>Edit</p>
        <p className={_.join([styles.actionBtn, styles.deleteBtn], ' ')}>Delete</p>
      </div>
    </div>
  )
}

QAItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default QAItem;
