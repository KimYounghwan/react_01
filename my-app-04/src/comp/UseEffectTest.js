import React,{useEffect, useState} from 'react';

function UseEffectTest(props) {
    let age = 0;
    const [cnt, setCnt ] = useState(0);
    useEffect(()=>{
        console.log("useEffect() 빈배열")
    },[age]);
    function handleClick(){
        //setCnt(cnt+1)
        age++;
        console.log("setCnt()")
    }
    return (
        <div>
            <h1>UseEffectTest</h1>
            <button onClick={handleClick}> Click </button>
        </div>
    );
}

export default UseEffectTest;