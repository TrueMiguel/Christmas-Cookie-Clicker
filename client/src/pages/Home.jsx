// Trying to set up the initial home page
// need to have the title display along with a start button that when clicked changes to new game if no data or if there is a continute button with a delete score. 
// since this is going to check for data going to use the 'useQuery' from the apollo client 

// import { useQuery } from '@apollo/client'

// need to make a queries util for use with the useQuery for the profiles. 


export default function Home() {
    // will use for later when checking data
    // const { loading, data } = useQuery(QUERY_PROFILES);
    // const profiles = data?.profiles || [];

    return(
        
        <div class="title">
            <h1>Christmas Cookie Clicker!</h1>
            <button type="button" className="btn btn-success">Start Game!</button>

        </div>
        
    );
}

