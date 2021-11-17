import React, {useState, useEffect} from "react";

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}
function numbToString(number){
    let str = number.toString()
    if(str.length >= 9){
        return str.substr(0,str.length-8) + ","+ str.substr(str.length-5,1) + "B"
    }
    if(str.length >= 6){
        return str.substr(0,str.length-5) + ","+ str.substr(str.length-5,1) + "M"
    }
    if(str.length >= 4){
        return str.substr(0,str.length-3) + ","+ str.substr(str.length-3,1) + "K"
    }
    return str
}

function getFetchResponse(url){
    let fetchData = {
        data: null
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tiktok33.p.rapidapi.com",
                "x-rapidapi-key": "adc410ba41msh6acf60cf369f28cp1f2bddjsnd06243e71f6b"
            }
        })
            .then(status)
            .then(json)
            .then(response => {
                fetchData.data = response
            });
    }, [url])

    if(fetchData.data !== null) return fetchData.data
}

const rapidKey = "adc410ba41msh6acf60cf369f28cp1f2bddjsnd06243e71f6b"

export {
    status,
    json,
    numbToString,
    rapidKey
}