import React from 'react';

function GawibawiboResult(props) {

    // const gbb = ['가위','바위','보']
    const gbb = "가위,바위,보".split(",")

    return (
        <div>
            <h3>당신의 선택: {gbb[props.result.userNum]}</h3>
            <h3>컴퓨터의 선택: {gbb[props.result.comNum]}</h3>
            <h3>결과: 컴퓨터 {props.result.result}</h3>
        </div>
    );
}

export default GawibawiboResult;