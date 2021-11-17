import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import "./UserPage.css"
import {status, json, numbToString, rapidKey} from "../commonFuncitons"

function UserFeed() {
    const {name} = useParams()

    // !! if using tiktok api url gives an error it may be because sometimes it returns data which
    // !! is not user feed
    // !! to see render example try to comment tiktok url line bellow and uncomment typicode url line instead
    // !! (typicode url contains 3 feed video of kikakiim and elaine.victoria users only)



    let typicode = false

    // const url = `https://tiktok33.p.rapidapi.com/user/feed/`+name;
    const url = `https://my-json-server.typicode.com/elizzaveta/user_feed3/user_feed`;

    if(url === `https://my-json-server.typicode.com/elizzaveta/user_feed3/user_feed`) typicode = true
    
    const [fetchData, setFetchData] = useState(null)
    
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
                if(typicode){
                    setFetchData({
                        data: response[name]
                    })
                }
                else{
                    setFetchData({
                        data: response
                    })
                }

            });
    }, [url])

    let posts_content = null;
    if (fetchData && fetchData.data!==undefined) {
        console.log(fetchData)
        posts_content =
            fetchData.data.map((item, key)=>
                <div key={key} className="feed-post">
                    <div className="play-count">{numbToString(item.stats.playCount)}</div>
                    {/*<video className="user-feed-video" src={item.video.playAddr} controls />*/}
                    <img className="user-feed-video" src={item.video.cover} alt="video"/>
                </div>
            )
    }

    return (
        <div className="user-video-grid">
            {posts_content}
        </div>
    )
}

export default UserFeed
