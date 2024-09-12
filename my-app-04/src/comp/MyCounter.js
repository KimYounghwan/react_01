import React,{useState} from 'react';

function MyCounter(props) {
    // let cnt = 0;
    const [cnt, setCnt] = useState(0)
    const [s, setS] = useState("")
    function handleClick(){
        // state에 등록된 변수인 cnt를 수정. 화면이 갱신됨
        let s2 = cnt+1
        setCnt( s2 );
        setS( s2%2==0 ? "짝수":"홀수" )
        console.log( "cnt", s2, cnt )
    }
    function handleClick2(){
        // state에 등록된 변수인 cnt를 수정. 화면이 갱신됨
        let s2 = cnt-1
        setCnt( s2 );
        setS( s2%2==0 ? "짝수":"홀수" )
        console.log( "cnt", s2, cnt )    }
    return (
        <div>
            <h1>Count = {cnt}</h1>
            <h2>{s}</h2>
            <button onClick={handleClick}> +1 </button>
            <button onClick={handleClick2}> -1 </button>
        </div>
    );
}

export default MyCounter;