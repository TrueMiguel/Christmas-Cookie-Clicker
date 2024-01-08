// the main game screen

// importing link and useLocation for navigation
import { Link, useLocation } from "react-router-dom"

export default function Game() {



    return (
        // main container that will house the game
        <div className="container">

            {/* sub containers that will house the clicker on the left and the status/options on the right */}
            <div id="clicker-side" className="col-9">
                <img src="../sc1.png" alt="gingerbread man" />
            </div>
            <div id="status-side" className="col-3">
                <button type="button" className="btn btn-danger">Exit</button>
                <div id="score" className="border border-dark"> Total score: 5000</div>
                {/* need to add line break here */}

                <h2>Cookies:</h2>
                {/* these will be greyed out until the point total is reached */}
                <h3>Gingerbread Man</h3>
                <h3>Sugar Cookie</h3>
                {/* need the font to change to Gingerbread house when the total is reached */}
                <h3> ??? </h3>
            </div>
        </div>
    )
}