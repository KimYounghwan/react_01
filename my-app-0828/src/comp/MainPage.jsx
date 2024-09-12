import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//페이지 정의
//메인페이지
export default function MainPage(props){ 
    const navigate = useNavigate()
    return <>
        <h1>용돈메인</h1>
        <div>
            <button onClick={(e)=>{
                navigate("/input")
            }}>등록</button>
            <button onClick={(e)=>{
                navigate("/list")
            }}>목록</button>
        </div>
    </>
}
