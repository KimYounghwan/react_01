import React from 'react';

function GawibawiboIntro(props) {
    function handleClick(){
        props.changePage("main")
    }
    return (
        <div>
            <button 
                onClick={handleClick}  
                style={{width:260, height:80, fontSize:"2em"}}>게임시작</button>
            <h3>게임시작 버튼을 눌러 시작하세요</h3>
        </div>
    );
}

export default GawibawiboIntro;