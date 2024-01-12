// importing the needed materials
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing the needed routes
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Game from './pages/GamePage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx'


// importing bootstrap for additional stylings
import 'bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            // making the pathing. 
            {
                index: true,
                element: <Home />
            }, 
            {
                path: '/game',
                element: <Game />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },

        ]
    }
])

// rendering everything
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)