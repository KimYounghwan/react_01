import React, { useRef, useState } from 'react';

function GameInput(props) {
    const {onNumberInput, onNewgame} = props;
    const [userNum, setUserNum] = useState("")
    const userNumElm = useRef(null)
    function handleChange(e){
        setUserNum(e.target.value)
    }
    function handleClick(e){
        onNumberInput( userNumElm.current.value ) //정답확인
        setUserNum("")
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button onClick={onNewgame}>새게임</button>
                <input ref={userNumElm} type='number' value={userNum} onChange={handleChange}></input>
                <button onClick={handleClick}>정답확인</button>
            </form>
        </div>
    );
}

export default GameInput;