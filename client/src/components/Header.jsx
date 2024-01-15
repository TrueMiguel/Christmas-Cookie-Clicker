import { Link } from 'react-router-dom';
import Auth from '../utils/auth.js';


const Header = () => {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className=" text-light mb-2 py-3 flex-row align-center">
            <div className="container flex-row justify-space-between-lg d-flex justify-content-between align-center">

                <div className='d-flex'>
                    <h1 className="m-0 text-warning" >Get Your Jingle On!</h1>
                </div>
                <div className='d-flex'>
                    {Auth.loggedIn() ? (
                        <button type='button' className='btn btn-success' onClick={logout}>Logout</button>
                    ) : (
                        <>
                            <Link to="/login">
                                <button type="button" className='btn btn-success'>Login</button>
                            </Link>
                            <Link to="/signup" className='ps-2'>
                            <button type="button" className='btn btn-success'>Signup</button>
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Header;
