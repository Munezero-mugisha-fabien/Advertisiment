import React from "react";
import Person from "../assets/Person.jpg";
import Pig1 from  "../assets/Pig1.jpg";


export const ArrowLink = ({ Names, Location, CompanyName, Tel }) => {
    return(
        <fieldset className="Fieldset">
        <div className="ArrowLink">
        <p className="Paragraphy">Names: { Names }</p>
        <p className="Paragraphy">Location: { Location }</p>
        <p className="Paragraphy">Company Name/Business: { CompanyName }</p>
        <p className="Paragraphy">Tel: { Tel }</p>
        <div className="Connect">
            </div>
            <img src={ Person } alt="PersonImage" className="Person" />
            <img src={ Pig1 } alt="PersonImage" className="ManyProduct"/>
            
            <ul className="ListeAvailProd">
            <p><u>Kind of Pig and hens</u></p>
                <li>Deroke</li>
                <li>Piyeteri</li>
                <li>Randarasi</li>
                <li>Hens</li>
                       </ul>

        </div>
        </fieldset>

    )
}
