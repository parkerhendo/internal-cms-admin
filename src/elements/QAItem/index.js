import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss';

const _ = require('lodash');

const QAItem = (props) => {
  return (
    <div className={styles.QAItem} id={props.id}>
      <h3 className={styles.question}>{props.question}</h3>
      <div className={styles.actions}>
        <p className={_.join([styles.actionBtn, styles.editBtn], ' ')} onClick={props.edit}>Edit</p>
        <p className={_.join([styles.actionBtn, styles.deleteBtn], ' ')} onClick={props.delete}>Delete</p>
      </div>
    </div>
  )
}

QAItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string,
  edit: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};

export default QAItem;
