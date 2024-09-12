import React,{useState} from "react"

export default function Counter(props){
    let count = 0;
    const [ hit, setHit ] = useState(0)
    const [ arr, setArr ] = useState([])
    function increase(){
        count++;
        console.log(count)
        setArr( [...arr, hit] )
    }
    return (
        <div>
            <p>총 {count}번 클릭</p>
            <p>Hit = {hit}</p>
            <button onClick={increase}>
                클릭
            </button>
        </div>
    )
}
