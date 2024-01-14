// Trying to set up the initial home page
// need to have the title display along with a start button that when clicked changes to new game if no data or if there is a continute button with a delete score. 
// since this is going to check for data going to use the 'useQuery' from the apollo client 

// import { useQuery } from '@apollo/client'

// need to make a queries util for use with the useQuery for the profiles. 

// importing link and useLocation for navigation
import { useMutation } from "@apollo/client";
import { DELETE_SCORE } from "../utils/mutations";
import { Link } from "react-router-dom";
import auth from "../utils/auth.js";
import { useEffect, useState } from "react";



export default function Home() {
    // delete score data and set to 0
    const [deleteScore, { loading }] = useMutation(DELETE_SCORE);
    const [profile, setProfile] = useState(auth.loggedIn());

    const resetScore = async () => {
        try {
            const profileId = auth.getProfile().data._id;
            await deleteScore({ 
                variables: { profileId: profileId }});
        } catch (e) {
            console.error('Error deleting score: ', e);
        }
    }

    useEffect(() => {
        setProfile(auth.loggedIn());
    }, []);

    // will use for later when checking data
    // const { loading, data } = useQuery(QUERY_PROFILES);
    // const profiles = data?.profiles || [];

    return(
        
        <div className="title">
            <h1>Christmas Cookie Clicker!</h1>
            {profile ? (
                <>
                    <Link to="/game" > 
                        <button type="button" className="btn btn-success">Start Game!</button>
                    </Link>
                    {loading ? 
                        <div>Deleting score...</div>
                        :
                        <button type="button" className="btn btn-danger" onClick={resetScore}> Delete score!</button>
                    }
                </>
            ) : 
                <div>Please log in</div>
            }       
        </div>
        
    );
}

