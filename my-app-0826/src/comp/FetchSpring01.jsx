import React, { useState } from 'react';

function FetchSpring01(props) {
    
    const [result, setResult] = useState("")

    function handleClickHello(e){
        let url = "http://localhost:8080/hello"
        fetch( url )
        // .then( (res) => { console.log(res) } )
        .then( (res) => res.text() )
        .then( (txt) => {
            console.log("recv : ", txt)
            setResult(txt)
        } )
    }

    return (
        <>
        <div>
            <button onClick={handleClickHello}>Hello</button>
        </div>
        <div>
            {result}
        </div>
        </>
    );
}

export default FetchSpring01;