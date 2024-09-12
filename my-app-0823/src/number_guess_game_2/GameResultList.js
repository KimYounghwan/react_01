import React from 'react';

function GameResultList(props) {
    const {resultMsgList} = props
    return (
        <div>
            <ul style={{listStyle:"none"}}>
                {resultMsgList.map((msg,index)=>{
                    return <li key={index}>{msg}</li>
                })}
            </ul>
        </div>
    );
}

export default GameResultList;