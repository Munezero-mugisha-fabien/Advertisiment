import React from "react";
import { Link } from "react-router-dom";
const Naviga = () => {
    return (
        <div className="Naviga" >
            <ul className="Liste">
                <li className="Li"><Link to="/">Home</Link></li>
                <li className="Li"><Link to="Image">Image</Link></li>
                <li className="Li"><Link to="Video">Video</Link></li>
                <li className="Li"><Link to="About">About</Link></li>
            </ul>
        </div>
    )
}
export default Naviga;