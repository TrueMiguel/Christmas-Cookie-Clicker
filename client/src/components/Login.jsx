import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth.js'; 

const Login= () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { loading, error }] = useMutation(LOGIN);
  
  // update form state based on current input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    })
  };



  return (
    <div className="container my-1">
      <div className="login-sheet">
        <Link to="/signup">← Go to Signup</Link>
        <br />
        <br />
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="username">Username:&nbsp;</label>
            <input className="input-login"
              placeholder=""
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:&nbsp;</label>
            <input className="input-login"
              placeholder="****"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          {loading ? <div>Signing in...</div> : 
          <div className="flex-row flex-end">
            <button type="submit" class="btn btn-success">Submit</button>
          </div>
          }
        </form>
      </div>
    </div>
  );
}

export default Login;