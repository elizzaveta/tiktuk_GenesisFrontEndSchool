import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import UserFeed from "./UserFeed";
import "./UserPage.css"
import {status, json, numbToString, rapidKey} from "../commonFuncitons"
import "../App.css"


function UserPage() {
    const {name} = useParams()

    // const url = `https://tiktok33.p.rapidapi.com/user/info/`+name
    const url = `https://my-json-server.typicode.com/elizzaveta/user_info/user_info`

    const [fetchData, setFetchData] = useState(null)

    let posts_content = null;
    useEffect(() => {
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tiktok33.p.rapidapi.com",
                "x-rapidapi-key": rapidKey
            }
        })
            .then(status)
            .then(json)
            .then(response => {
                setFetchData({
                    data: response[name] // change it when moving to tt api (data: response)
                })
            });
    }, [url])

    if (fetchData) {
        posts_content =
            <div className="">
                <div className="avatar-name-div">
                    <img className="user-page-avatar" src={fetchData.data.user.avatarMedium} alt="avatar"/>
                    <div className="name-subscribe-div">
                        <div className="user-page-username">{name}</div>
                        <div className="user-page-nickname">{fetchData.data.user.nickname}</div>
                        <button className="button-pink-borders">Subscribe</button>
                    </div>
                </div>
                <div>{fetchData.data.user.signature}</div>
                <div className="user-stats">
                    <div>{numbToString(fetchData.data.stats.followingCount)} Folowing</div>
                    <div>{numbToString(fetchData.data.stats.followerCount)} Folowers</div>
                    <div>{numbToString(fetchData.data.stats.heart)} Likes</div>
                </div>
                <div className="user-page-line"></div>
                <UserFeed/>
            </div>
    }

    return (
        <div>
            {posts_content}
        </div>
    )
}


export default UserPage
