import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth'; // need to add jwt-decode to package.json of client side for this
import { ADD_ACCOUNT } from '../utils/mutations';

function Signup(props) {
    // set inital form state 
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [addAccount, { loading: loadSignup }] = useMutation(ADD_ACCOUNT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check form for validation
    const mutationResponse = await addAccount({
      variables: {
        username: formState.username,
        password: formState.password,
      },
    });
    console.log("new user: ", mutationResponse);
    const token = mutationResponse.data.addAccount.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username: </label>
          <input
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password: </label>
          <input
            placeholder="Min 4 characters"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {loadSignup ? <div>Signing up...</div> : 
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
        }
      </form>
    </div>
  );
}

export default Signup;
