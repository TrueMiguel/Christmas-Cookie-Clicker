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


    return(
        
        <div className="title p-4 text-warning">
            <h1 className="">Christmas Cookie Clicker!</h1>
            {profile ? (
                <>
                    <Link to="/game" > 
                        <button type="button" className="btn btn-success">Start Game!</button>
                    </Link>
                    {loading ? 
                        <div>Deleting score...</div>
                        :
                        <button type="button " className="btn btn-danger ps-2" onClick={resetScore}> Delete score!</button>
                    }
                </>
            ) : 
                <h2 className="">Please log in</h2>
            }       
        </div>
        
    );
}

