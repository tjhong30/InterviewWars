import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { render } from 'react-dom';

class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      questions: [];
    };
// binding here
}
getUrls() {
 $.ajax({
   type: "GET",
   url: 'localhost:3000',
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




render() {
    return (
        <div>
            <h1> Welcome Interview Wars! </h1>
            <h2> Please help other users by answering a question or submitting an answer </h2>
        </div>
    )
}
}


export default Home;
