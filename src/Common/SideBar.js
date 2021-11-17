import React, {useState} from "react";
import "./SideBar.css"
import {Link} from "react-router-dom"
import following from '../icons/following.png';
import trending from '../icons/trending.png';

function SideBar(){
    const [isMobile, setIsMobile] = useState(false);
    window.addEventListener('resize', (e) => {setIsMobile(window.innerWidth < 991)})

    return isMobile ? <MobileSideBar /> : <DesktopSideBar />
}

function DesktopSideBar(){
    return(
        <div className="sidebar-desktop">
            <Link id="trending-id" className={`sidebar-link  pink`} to="/">
                <img src={trending} alt="img"/>
                Trending
            </Link>
            <div>
                <img src={following} alt="img"/>
                Following
            </div>
        </div>
    )
}

function MobileSideBar(){
    return(
        <div className="mobile-sidebar">
            <Link to="/">
                <img src={trending} alt="img"/>
            </Link>
            <img src={following} alt="img"/>
        </div>
    )
}

export default SideBar