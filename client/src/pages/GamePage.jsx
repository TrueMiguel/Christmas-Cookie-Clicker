// the main game screen

// importing link and useLocation for navigation
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

// adding the useScore and addScore mutation
import { useMutation, useQuery } from "@apollo/client";
import { ADD_SCORE } from "../utils/mutations";

// adding the query for fetching the score 
import { SINGLE_SCORE } from "../utils/queries"

// importing the image
import gingerbreadMan from '../assets/sc1.png'
import sugarCookie from '../assets/sc2.png'
import gingerbreadHouse from '../assets/sc3.png'
import loadingImg from '../assets/loading.png'

export default function Game() {

    // initializing the score state
     const [score, setScore] = useState(0); 

     const { loading: loadQueryScore, error, data: loadData } = useQuery(SINGLE_SCORE);

     const [cookie, setCookie] = useState(gingerbreadMan);

     const [bonus, setBonus] = useState(100);

    // using score mutation
    const [addScore, { loading: loadSaveScore, data: addScoreData }] = useMutation(ADD_SCORE);

    const imgClick = () => {
        // note to self, will need to use the useState hook for database
        setScore(score + bonus);
        console.log('Score: ', score)
    }

    // Saving new score
    const handleAddScore = (newScore) => {
        addScore({ variables: { score: newScore } });
    }

    // use effect for updating the type of cookie and the cookie click value
    useEffect(() => {
        if (score >= 1000 && score < 10000) {
            setCookie(sugarCookie);
        }
        if (score >= 10000) {
            setCookie(gingerbreadHouse);
        }
    }, [score])

    useEffect(() => {
        if (score >= 1000 && score < 9999) {
            setBonus(300);
        }
        if (score >= 10000) {
            setBonus(800);
        }
    }, [cookie])

    useEffect (() => {
        if(!loadQueryScore && loadData && loadData.score.length > 0) {
            setScore(loadData.score[0].score);
            console.log("loaded Score!", loadData);
        }
    }, [loadQueryScore, loadData]); 

    return (
        // main container that will house the game
        <div className="container">
            {loadQueryScore ? 
            <div className="loadingContainer">
            <div><img src={loadingImg} alt="sleeping Santa" className="loadingImg "/></div> 
            </div>
            : 
                <div className="row">

                    {/* sub containers that will house the clicker on the left and the status/options on the right */}
                    <div id="clicker-side" className="col-9">
                        <img src={cookie} alt="gingerbread man" className="gb-m"
                        onClick={imgClick}
                        />
                    </div>
                    <div id="status-side" className="col-3">
                        <Link to="/">
                            <button type="button" className="btn btn-danger">Exit</button>
                        </Link>
                        {loadSaveScore ? <div>Saving</div> : 
                            <button type="button" className="btn btn-success" onClick={() => handleAddScore(score)}>Save Score</button>
                        }
                        <div id="score" className="border border-dark"> Total score: {score}</div>
                        {/* need to add line break here */}

                        <h2>Cookies:</h2>
                        {/* these will be greyed out until the point total is reached */}
                        <h3>Gingerbread Man</h3>
                        <h3>Sugar Cookie</h3>
                        {/* need the font to change to Gingerbread house when the total is reached */}
                        {cookie === gingerbreadHouse ? <h3>Gingerbread House!</h3> : <h3> ??? </h3>}
                    </div>
                </div>
            }
        </div>
    )
}