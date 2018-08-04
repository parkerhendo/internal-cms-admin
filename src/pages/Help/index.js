import React from 'react';
import styles from './styles.scss';

import { QAItem } from '../../elements';
import Header from '../../elements/Header';

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
  }

  async componentWillMount() {
    const url = await fetch(
      'https://gist.githubusercontent.com/parkerhendo/2dbbe7fb906528b8a3cc3fc8a2e68ea3/raw/e965aa991e30e3933823c82ff4ef1a4ff4d5b332/testfaq.json'
    );
    const json = await url.json();
    this.setState({
      list: json,
    });
  }

  onChange = (event) => {
    let key = (event.target.name || '').toLowerCase();
    let value = event.target.value || '';

    this.setState({
      [key]: value,
    });
  };

  addItem = (question, answer) => {
    let { list } = this.state;
    let data = { id: list.length + 1, q: question, a: answer };
    console.log(data);
    let newList = _.concat(list, data);
    this.setState({
      list: newList,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.question === '' || this.state.answer === '') {
      alert('Cannot submit empty forms');
    } else {
      this.addItem(this.state.question, this.state.answer);
      console.log(this.state.list);
      this.setState({
        question: '',
        answer: '',
      });
    }
  };

  onDelete = (e) => {
    const { list } = this.state;
    const currentItem = e.currentTarget.parentNode.parentNode.id;

    const updatedList = list.filter(item => item.id != currentItem)
    
    this.setState({
      list: updatedList,
    });
    
    console.log(list);
  };

  render() {
    const { list } = this.state;
    return (
      <div className={styles.help}>
        <section className={styles.addFAQ}>
          <Header
            title="Add an FAQ"
            description="Add an FAQ to the help page of the website"
          />
          <form className={styles.addFAQInputs}>
            <label htmlFor="Question" className={styles.label}>
              Add a Question
            </label>
            <div>
              <input
                type="text"
                name="question"
                autoComplete="off"
                className={styles.textInput}
                onChange={this.onChange}
                value={this.state.question}
              />
            </div>
            <label htmlFor="Answer" className={styles.label}>
              Add a Answer
            </label>
            <div>
              <textarea
                name="answer"
                autoComplete="off"
                className={styles.textArea}
                onChange={this.onChange}
                value={this.state.answer}
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
          <Header
            title="Current FAQs"
            description="A list of the currently display Questions and Answers on our FAQ page. Edits and deletions will instantly apply."
          />
          {
            list.length >= 1 ? 
              list.map((item, i) => {
                return (
                  <QAItem
                    id={item.id}
                    key={item.id}
                    question={item.q}
                    edit={this.onEdit}
                    delete={this.onDelete}
                  />
                );
              }) 
            : <p className={styles.description} style={{marginTop: '1rem'}}>you do not have any published FAQs</p>
          }
        </section>
      </div>
    );
  }
}
