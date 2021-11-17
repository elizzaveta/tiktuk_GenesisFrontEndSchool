import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './Post.css';
import play from '../icons/play.png'
import pause from '../icons/pause.png'
import heart from '../icons/heart.png'
import comment from '../icons/comment.png'
import share from '../icons/share.png'
import follow from '../icons/following-pink.png'
import {status, json, numbToString, rapidKey} from "../commonFuncitons";

function Trending() {
    const url = `https://tiktok33.p.rapidapi.com/trending/feed`
    // const url = `https://my-json-server.typicode.com/elizzaveta/trending/trending`

    const [fetchData, setFetchData] = useState({
        data: null
    })

    const [isMobile, setIsMobile] = useState(false);
    window.addEventListener('resize', (e) => {setIsMobile(window.innerWidth < 600)})

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
                    data: response
                })
            });
    }, [url])


    let posts_content = null;
    let subscr_button = <button className="button-pink-borders-t button-d-flex">Subscribe</button>
    if(isMobile){
        subscr_button =
            <button className="button-pink-borders-t button-d-flex">
                <div>+</div>
                <img src={follow} alt="Subscribe"/>
            </button>
    }

    if (fetchData.data) {
        posts_content =
            fetchData.data.map((item, key)=>
                <div className="post">
                    <div>
                        <Link to= { '/user/' + item.authorMeta.name } className="trending-avatar-name" >
                            <img className="avatar" src={item.authorMeta.avatar} alt="UserAvatar"/>
                            <div>
                                <div className="user-name-tr">{item.authorMeta.name}</div>
                                <div className="user-nickname-tr">{item.authorMeta.nickName}</div></div>
                        </Link>
                        <div className="post-text-video">
                            <div>{item.text}</div>
                            {/*hashtags are already inside the item.text, but if they were not:*/}
                            {/*{item.hashtags.map((item, key)=>*/}
                            {/*    '#' + item.name + ' '*/}
                            {/*)}*/}
                            <div>
                                <div  onClick={() => playVideo(item.id)} className="play-button">
                                    <img id={"play"+item.id} src={play} alt="play-b"/>
                                </div>
                                <video id={item.id} className="trending-video" src={item.videoUrl} loop/>
                            </div>
                        </div>
                    </div>
                    <div className="subscr-stats">
                        {subscr_button}
                        <div className="trending-video-stats">
                            <div>
                                <div className="stats-icon">
                                    <img src={heart} alt="likes"/>
                                </div>
                                <div>{numbToString(item.diggCount)}</div>
                            </div>
                            <div>
                                <div className="stats-icon">
                                    <img src={comment} alt="comments"/>
                                </div>
                                <div>{numbToString(item.commentCount)}</div>
                            </div>
                            <div>
                                <div className="stats-icon">
                                    <img src={share} alt="share"/>
                                </div>
                                <div>{numbToString(item.shareCount)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    return (
        <div>
            {posts_content}
        </div>
    )
}
function playVideo(id){
    let video = document.getElementById(id)
    if(video.paused){
        video.play()
        document.getElementById("play"+id).src = pause
    }
    else{
        video.pause()
        document.getElementById("play"+id).src = play
    }

}

export default Trending
