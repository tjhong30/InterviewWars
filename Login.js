<<<<<<< HEAD
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
=======
import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { GoogleLogin } from "react-google-login";
>>>>>>> 6018c295b674420e6b2e9ee534a3ad0af379141e

const style = {
  margin: 12,
  backgroundColor: "teal",
  color: "black"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //binding here
<<<<<<< HEAD
    }
    render() {
        return (
           < div id ="parent">
            <div>
            <h1>Interview Wars Login</h1>
            </div>
            <div>
    <TextField >  </TextField>
      Username
    <br />

    <TextField > </TextField>
      Password
     <Button label="Login" style={style} > <Link to="/home">Login</Link> </Button >
    </div>
    </div>
        )
    }
=======
    this.googleOAuthSuccess = this.googleOAuthSuccess.bind(this);
    this.googleOAuthFailure = this.googleOAuthFailure.bind(this);
  }

  // This is the response method for Google oAuth Success
  googleOAuthSuccess(result) {
    console.log("This is the google result success", result);
  }

  // This is the response method for Google oAuth Failure
  googleOAuthFailure(result) {
    console.log("This is the google result failure", result);
  }

  render() {
    return (
      <div id="parent">
        <div>
          <h1>Interview Wars Login</h1>
        </div>
        <div>
          <TextField> </TextField>
          Username
          <br />
          <TextField> </TextField>
          Password
          <Button label="Login" style={style}>
            {" "}
            Login{" "}
          </Button>
        </div>
        <GoogleLogin
          clientId="881814036265-e59ej1jgrmph8v4h9pffl1629dpqssdn.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={this.googleOAuthSuccess}
          onFailure={this.googleOAuthFailure}
        />
      </div>
    );
  }
>>>>>>> 6018c295b674420e6b2e9ee534a3ad0af379141e
}

export default Login;
