import React from "react";
import Person from "../assets/Person.jpg";
import ManyPro from "../assets/ManyProd.jpg";
import Product from "../assets/Product.jpg";

export const SecondParty = ({ Names, Location, CompanyName, Tel }) => {
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
            <img src={ ManyPro } alt="Product" className="ManyProduct"/>
            
            <ul className="ListeAvailProd">
            <p><u>Product available</u></p>
                <li>Movit</li>
                <li>Sante</li>
                <li>Movana</li>
                <li>Mariaka</li>
                <li>Mama beby</li>
                <li>Amara</li>
                <li>Zoe</li>
                <li>Cologate</li>
                <li>White dent</li>
                </ul>

        </div>
        </fieldset>

    )
}
