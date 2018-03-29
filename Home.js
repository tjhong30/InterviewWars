import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { render } from 'react-dom';
import QuestionItem from './getQuestionsItem.js';

var x;

class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
// binding here
this.updateQuestions = this.updateQuestions.bind(this);
this.getQuestion = this.getQuestion.bind(this);
this.getQuestion();
x = this;
}

componentDidMount() {
}

updateQuestions(question) {
  this.setState((prevState, props) => {
    let newQuestions = question;
    console.log(questions);
    return {
      questions: newQuestions
    }
  })
}

getQuestion() {
 $.ajax({
   type: "GET",
   url: 'localhost:3000/getAllQuestions',
   success: function(resp) {
     console.log('grabbed questions')
     console.log(resp);
     x.updateQuestions(resp);
   },
   error: function() {
     console.log("error");
   }
 });
}




render() {
  let feedItems = [];

    for (let i = 0; i < this.state.questions.length; i ++) {
      feedItems.push(<QuestionItem key={i} questions={this.state.questions[i]}/>)
    }



    return (
        <div>
            <h1> Welcome Interview Wars! </h1>
            <h2> Please help other users by answering a question or submitting an answer </h2>
            <div styles={styles.container} id='feed'>
              {feedItems}
            </div>
        </div>
    )
}
}

const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

export default Home;
