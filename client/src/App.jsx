import './App.css';
import { Outlet } from 'react-router-dom';

// this will be used for setting up the graphQl uri along with the JWT token auth. If there is also going to be any headers or footers. 

// adding in the React component to render the route's element
function App() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default App