import React from "react";
import { Outlet } from "react-router-dom";
import Naviga from "./Naviga";
import Footer from "./Footer";

const HomePage = () => {
    return(
        <div className="Homepage">
            <Naviga/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default HomePage;