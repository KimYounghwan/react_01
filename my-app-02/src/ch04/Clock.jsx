import React from "react"

export default function Clock(props){

    return (
        <div>
            <h1>HI React</h1>
            <h2>지금시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}