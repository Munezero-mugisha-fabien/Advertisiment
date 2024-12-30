import React from "react";
import Car1  from "../assets/Car1.jpg";
import Car2  from "../assets/Car2.jpg";
import Car4  from "../assets/Car4.jpg";
import Shoes  from "../assets/Shoes.jpg";
import Shoes1  from "../assets/Shoes1.jpg";
import Shoes2  from "../assets/Shoes2.jpg";
const Image = () =>{
    return(
<div className="ContainerImage">
    <div className="Image">
        <img src={ Car1 } alt="" className="Images" />
        <p>Modern Car</p>
    </div>
    <div className="Image">
        <img src={ Car2 } alt="" className="Images" />
        <p>Modern Car</p>
    </div>
    <div className="Image">
        <img src={ Car4 } alt="" className="Images"/>
        <p>Modern Car</p>
    </div>
    <div className="Image">
        <img src={ Shoes} alt="" className="Images" />
        <p>Shoes</p>
    </div>
    <div className="Image">
        <img src={Shoes1 } alt="" className="Images"/>
        <p>Shoes</p>
    </div>
    <div className="Image">
        <img src={ Shoes2} alt="" className="Images" />
        <p>Shoes</p>
    </div>
    <div className="Image">
        <img src={Shoes1 } alt="" className="Images"/>
        <p>Shoes</p>
    </div>
    <div className="Image">
        <img src={ Shoes2} alt="" className="Images" />
        <p>Shoes</p>
    </div>

</div>
    )
}
export default Image