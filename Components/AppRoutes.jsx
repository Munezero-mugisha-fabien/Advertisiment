import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HomeBody from "./HomeBody";
import Image from "./Images";
import { PageNotFound } from "./PageNotFound";
import   VideoPlayer from "./Video";
import { AboutUs } from "./AboutUs";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="" element={<HomePage/>}>
                <Route index element={<HomeBody/>}/>
                <Route path="Image" element={<Image/>}/>
                <Route path="Video" element={< VideoPlayer/>}/>
                <Route path="About" element={<AboutUs/>}/>
                
                </Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes;