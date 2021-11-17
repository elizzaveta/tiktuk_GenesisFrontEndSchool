import './App.css';
import React, { useState } from 'react';
import Header from "./Common/Header";
import Trending from "./Trending/Post"
import UserPage from "./User/UserPage";
import SideBar from "./Common/SideBar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"


function App() {
    return (

        <Router>
            <Header/>
            <div className="line"></div>
            <div className="main-wrapper">
                <SideBar className = "sidebar"/>
                <div className="sidebar-space"></div>
                <Switch>
                    <Route exact path = "/"><Trending/></Route>
                    <Route path = "/user/:name"><UserPage/></Route>
                </Switch>
            </div>

        </Router>
    );
}


export default App;
