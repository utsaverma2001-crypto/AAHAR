import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin } from '../../actions/auth';
import Alert from '../Alert/Alert';
import '../style.css';

const SignIn = ({ signin, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    signin({ email, password });
  };
  if (isAuthenticated) {
    console.log(isAuthenticated);
    return <Redirect to="/" />;
  }

  return (
    <div>
     <h1 class="mainh">ARE YOU HUNGRY ?</h1> 
     <h1 class="mainh1">Don't Wait , Lets Start Ordering Food Now ! </h1> 
      <div className="signup">
        <div className="signup_card">
          <form className="signup_form" onSubmit={onSubmit}>
            <Alert />
            <h2>Sign In </h2>

            <label>Enter Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Enter Email"
              onChange={onChange}
            />
            <br />
            <label>Enter Password</label>
            <br></br>
            <input
              type="password"
              value={password}
              name="password"
              required
              placeholder="Enter Password"
              onChange={onChange}
            />
            <br />

            <button type="submit">Submit</button>
            <h4 className="done">Don't have an account ?</h4>
            <Link to="/signup" className="link">Create one</Link>
          </form>
        </div>
      </div>
      <div className="foot1">
        <div className="icons">
          <i className="fab fa-instagram fa-2x" aria-hidden="true"></i>
          <i className="fab fa-facebook fa-2x " aria-hidden="true"></i>
          <i className="fab fa-twitter fa-2x " aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signin })(SignIn);
