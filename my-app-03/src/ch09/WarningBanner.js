import React from "react"

export default function WarningBanner(props){
    if(!props.warning)
        return null;
    
    return (
        <h1>
            경고
        </h1>
    )
}