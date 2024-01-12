import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// apollo client to enable interaction with the GraphQL API
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { Outlet } from 'react-router-dom';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, {headers }) => {
    const token = localStorage.getItem('id_token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});


// this will be used for setting up the graphQl uri along with the JWT token auth. If there is also going to be any headers or footers. 
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

// adding in the React component to render the route's element
function App() {
    return (

        // wrapping the component tree with the ApolloProvider component to enable access to the ApolloClient
        <ApolloProvider client={client}>
            <div>
                <Header />
            </div>    
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
            </ApolloProvider>
    );
}

export default App