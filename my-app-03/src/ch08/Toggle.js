import React,{useState} from "react"


function ToggleOn(){
    return (
        <div>*** 켜짐 ***</div>
    )
}
function ToggleOff(){
    return (
        <div>--- 꺼짐 ---</div>
    )
}

export default function Toggle(props){
    const [isToggleOn, setIsToggleOn] = useState(true)

    function handleClick(){
        setIsToggleOn( !isToggleOn )
    }
    let btn;
    if(isToggleOn)
        btn = <ToggleOn />
    else
        btn = <ToggleOff />

    return (
        <div>
            <button onClick={handleClick}>
            {btn}
            </button>            
        </div>
    )
}