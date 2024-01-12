// may need to import useFunctions from react-router-dom if need be, and add react-router-dom to package.json 
// import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


const Header = () => {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <h1 className="m-0">Get Your Jingle On!</h1>
            </div>
            <div>
                {Auth.loggedIn() ? (
                    <button className='' onClick={logout}>Logout</button>
                ) : (
                    <>
                        <Link className='' to="/login">
                        Login
                        </Link>
                        <Link className='' to="/signup">
                        Signup
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
