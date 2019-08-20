import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import fire from './config/Fire';

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        email:'',
        password:''
      }
    }

    login = (e) => {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).catch((error) => {
        console.log(error);
      });
    }

    signup = (e) => {
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error);
      })
    }

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    render() {
      return (
        <div className="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input value={this.state.password} onChange={this.handleChange} type="password"
            name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <Button type="submit" onClick={this.login} class="btn btn-primary">Login</Button>
          <Button onClick={this.signup} style={{marginLeft: '25px'}} className="btn 
          btn-success">Signup</Button>
        </form>
        </div>
      );
    }
}

export default Login;
