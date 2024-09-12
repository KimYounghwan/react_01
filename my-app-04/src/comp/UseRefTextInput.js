import React,{useRef} from 'react';

function UseRefTextInput(props) {
    const inputRef = useRef(null)
    const onButtonClick=()=>{
        inputRef.current.focus();
    }
    return (
        <>
        <input ref={inputRef} ></input>
        <button onClick={onButtonClick}>Focus input</button>
            
        </>
    );
}

export default UseRefTextInput;