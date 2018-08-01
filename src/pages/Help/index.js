import React from 'react';
import styles from './styles.scss';

import QAItem from '../../components/QAItem';

const _ = require('lodash');
const fetch = require('node-fetch');

export default class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      list: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  async componentDidMount() {
    const url = await fetch('https://gist.githubusercontent.com/ws/cbeef965c6ec0a123bcd32f6855ff81b/raw/abca36d88d68537fce704fb69fa29b3397779080/faq.json');
    const json = await url.json();
    this.setState({
      list: json,
    });
  }

  onChange(event) {
    let key = (event.target.name || '').toLowerCase();
    let value = event.target.value || '';

    this.setState({
      [key]: value,
    });
  }

  addItem(question, answer) {
    let { list } = this.state;
    let data = {q: question, a: answer}
    let newList = _.concat(list, data);
    console.log(data);
    console.log(newList);
    this.setState({
      list: newList,
    });
  }

  onSubmit(e) {
    this.addItem(this.state.question, this.state.answer);
    e.preventDefault();
  }

  render() {
    const { list } = this.state;
    return (
      <div className={styles.help}>
        <section className={styles.addFAQ}>
          <h3 className={styles.subTitle}>Add a FAQ</h3>
          <p className={styles.description}>
            Add more frequently asked questions to our database so we don't have
            to deal with it on our end.
          </p>
          <form className={styles.addFAQInputs}>
            <label for="Question" className={styles.label}>
              Add a Question
            </label>
            <div>
              <input
                type="text"
                name="question"
                className={styles.textInput}
                onChange={this.onChange}
              />
            </div>
            <label for="Answer" className={styles.label}>
              Add a Answer
            </label>
            <div>
              <textarea
                name="answer"
                className={styles.textArea}
                onChange={this.onChange}
              />
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={this.onSubmit}
            >
              Add to FAQ Page
            </button>
          </form>
        </section>
        <section className={styles.questionPreview}>
          <h3 className={styles.subTitle}>Current FAQs</h3>
          <p className={styles.description}>
            A list of the currently display Questions and Answers on our FAQ page. Edits and deletions will instantly apply.
          </p>
          {
            this.state.list.map((item) => {
              return (
                <QAItem question={item.q} answer={item.a} />
              )
            })
          }
        </section>
      </div>
    );
  }
}
