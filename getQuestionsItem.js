import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
// FeedItem should consist of an image (src contained in the data from the AJAX request)
class QuestionItem extends Component {

  render() {
    // put render logic here
    return (
      <div>
        <li>{this.props.questions}</li>
      </div>
    );
  }
}

const styles = {
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
};

module.exports = QuestionItem;
