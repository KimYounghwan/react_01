import React from 'react';
import "../App.css"

function MyHello(props) {
    const {name, msg} = props;//객체구조분해할당
    return (
        <div className='App'>
            <h1>헬로 리액트</h1>
            <h2>하이~ {name} {msg}</h2>
        </div>
    );
}

export default MyHello;