import React, {useState} from "react";
import "./Header.css"
import {Link} from "react-router-dom"
import menu from '../icons/menu.png'
import cross from '../icons/cross.png'

function Header(){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);
    window.addEventListener('resize', (e) => {setIsMobile(window.innerWidth < 991)})


    return isMobile ? <MobileHeader /> : <DesktopHeader />
}

function DesktopHeader(){
    return(
        <header>
            <div className="h-wrapper">
                <div className="left">
                    <Link to="/" className="company-name link-router link-blue">TikTuk</Link>
                </div>
                <div>
                    <input className="search-input" type="search" id="site-search" name="q"
                           placeholder=" Search accounts and videos"/>
                    <button className="grey-button button">Search</button>
                </div>
                <div className="log-in">
                    <button className="white-button button">Log in</button>
                    <button className="pink-button button">Sign up</button>
                </div>
            </div>
        </header>
    )
}

function MobileHeader(){
    const [IfMenuOn, setIfMenuOn] = useState(false)

    let menu_details
    let menu_shadow

    if(IfMenuOn){
        menu_details = <div className="menu-details">
            <nav className="links-in-menu">
                <Link to="/" className="link-router link-dark" onClick={()=>{
                    setIfMenuOn(!IfMenuOn)
                    menuClick(IfMenuOn)
                }}>Trending</Link>
                <div className="link-router link-dark">Folowing</div>
            </nav>
            <div className="search-in-menu">
                <input className="search-input" type="search" id="site-search" name="q"
                       placeholder=" Search accounts and videos"/>
                <button className="grey-button button">Search</button>
            </div>
            <div className="log-in buttons-in-menu-details">
                <button className="white-button button">Log in</button>
                <button className="pink-button button">Sign up</button>
            </div>
        </div>
        menu_shadow = <div className="menu-shadow" onClick={()=>{
            setIfMenuOn(!IfMenuOn)
            menuClick(IfMenuOn)
        }}>

        </div>
    }

    return(
        <header>
            <div className="h-wrapper">
                <div className="left">
                    <Link to="/" className="company-name link-router link-blue" onClick={()=>setIfMenuOn(false)}>TikTuk</Link>
                </div>
                <img id="menu-img" className="menu" src={menu} alt="Menu" onClick={()=>{
                    setIfMenuOn(!IfMenuOn)
                    menuClick(IfMenuOn)
                }}/>
                {menu_details}
                {menu_shadow}
            </div>
        </header>
    )
}

function menuClick(IfMenuOn){
    if(IfMenuOn){
        document.getElementById("menu-img").src = menu
    }
    else{
        document.getElementById("menu-img").src = cross
    }
}

export default Header