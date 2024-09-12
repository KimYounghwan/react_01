import React,{useState, useRef} from 'react';

function UseReftest(props) {
    // let cnt = 0;
    const [cnt, setCnt] = useState(0) // 변경시 화면갱신
    const s = useRef(0) //변경시 화면갱신안됨

    function handleClick(){
        // state에 등록된 변수인 cnt를 수정. 화면이 갱신됨
        s.current++ //바뀌어도 화면갱신 안됨
        console.log(s.current)       
        // setCnt( cnt+1 );
    }
    return (
        <div>
            <h1>Count = {cnt}</h1>
            <h2>s = {s.current}</h2>
            <button onClick={handleClick}> +1 </button>
        </div>
    );

}

export default UseReftest;