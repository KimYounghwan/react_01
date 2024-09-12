import React from 'react';

function GawibawiboInput(props) {

    function handleGawiClick(){
        props.onButtonClick(0)
    }
    function handleBawiClick(){
        props.onButtonClick(1)
    }
    function handleBoClick(){
        props.onButtonClick(2)
    }
    return (
        <div>
            <button onClick={handleGawiClick}  style={{width:60, height:60}}>가위</button>
            <button onClick={handleBawiClick} style={{width:60, height:60}}>바위</button>
            <button onClick={handleBoClick} style={{width:60, height:60}}>보</button>

            <h3>&gt;&gt; 가위,바위,보 하나만 선택하세요 &lt;&lt;</h3>
            <hr></hr>
        </div>
    );
}

export default GawibawiboInput;