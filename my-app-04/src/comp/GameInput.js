import React, { useState } from 'react';

function GameInput(props) {
    const {userNum, setUserNum, onNumberInput} = props;

    function handleChange(e){
        setUserNum(e.target.value)
    }
    function handleClick(e){
        onNumberInput() //정답확인
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>새게임</button>
                <input type='number' value={userNum} onChange={handleChange}></input>
                <button onClick={handleClick}>정답확인</button>
            </form>
        </div>
    );
}

export default GameInput;