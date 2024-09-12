import React,{useState} from "react"
import "../App.css"

export default function Counter(props){

    let count = 0;
    // let a = useState(0)
    // console.log(a)
    // let cnt = a[0]
    // let setCnt = a[1]
    let [cnt, setCnt] = useState(0)//구조분해할당

    function increase(){
        count++
        console.log(count)
        setCnt( cnt + 1)//setCnt()를 통해 간접적으로 cnt를 수정
    }
    return (
        <div className="App">
            <p>Count = {count}</p>
            <p>Cnt = {cnt}</p>
            <button onClick={increase}>증가</button>
        </div>
    )
}