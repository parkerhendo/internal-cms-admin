import React from 'react';

import styles from './styles.scss';

const Help = () => (
  <div className={styles.help}>
    <section className={styles.addFAQ}>
      <h3 className={styles.subTitle}>Add a FAQ</h3>
      <p className={styles.description}>Add more frequently asked questions to our database so we don't have to deal with it on our end.</p>
      <form className={styles.addFAQInputs}>
        <label for="Question" className={styles.label}>Add a Question</label>
        <div>
          <input type="text" name="Question" className={styles.textInput}/>
        </div>
        <label for="Answer" className={styles.label}>Add a Answer</label>
        <div>
          <textarea name="Answer" className={styles.textArea}></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}>Add to FAQ Page</button>
      </form>
    </section>
  </div>
);

export default Help;