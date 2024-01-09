import './App.css';

// apollo client to enable interaction with the GraphQL API
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

// this will be used for setting up the graphQl uri along with the JWT token auth. If there is also going to be any headers or footers. 
const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
})

// adding in the React component to render the route's element
function App() {
    return (

        // wrapping the component tree with the ApolloProvider component to enable access to the ApolloClient
        <ApolloProvider client={client}>
        <div>
            <Outlet />
        </div>
        </ApolloProvider>
    );
}

export default App