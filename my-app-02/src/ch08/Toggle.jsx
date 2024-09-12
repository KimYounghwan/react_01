import React,{useState} from "react"

export default function Toggle(props){
    const [isToggleOn, setIsToggleOn] = useState(true)
    
    function handleClick(){
        setIsToggleOn((isToggleOn)=> !isToggleOn)
    }
    return (
        <div>
            <button onClick={handleClick}>
                {isToggleOn ?"켜짐":"꺼짐"}
            </button>
        </div>
    )
}