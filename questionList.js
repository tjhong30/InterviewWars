import React, { Component } from 'react';
import getQuestionsItem from './getQuestionsItem';

var x;

class Questions extends Component {

  constructor() {
    super();

    this.state = {
      urls: [],
    };

    this.updateUrls = this.updateUrls.bind(this);
    this.getUrls = this.getUrls.bind(this);
    this.getUrls();
    x = this;
  }

  updateUrls(urls) {
    this.setState((prevState, props) => {
      let newUrls = urls;
      console.log(newUrls);
      return {
        urls: newUrls,
      }
    })
  }

   getUrls() {
    $.ajax({
      type: "GET",
      url: 'https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json',
      success: function(resp) {
        console.log('grabbed urls')
        console.log(resp);
        x.updateUrls(resp);
      },
      error: function() {
        console.log("error");
      }
    });
  }

  componentDidMount() {

  }

  render() {
    // put render logic here
    let feedItems = [];

    for (let i = 0; i < this.state.urls.length; i ++) {
      feedItems.push(<FeedItem key={i} url={this.state.urls[i]}/>)
    }

    console.log(feedItems);

    return (
      <div styles={styles.container} id='feed'>
        {feedItems}
      </div>
    );
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

module.exports = Questions;
