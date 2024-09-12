import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//상세페이지
export default function DetailPage(props){
    const navigate = useNavigate()
    const { seq } = useParams();

    //상세보기용
    const [dataDetail, setDataDetail] = useState([])
    
    useEffect( fetchOne, [] )

    function fetchOne(){
        let url = 'http://localhost:8080/yongdons/'+seq
        fetch( url )
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setDataDetail(json)
        });
    }

    function handleUpdateClick(e){
        navigate("/update/"+dataDetail.seq)
    }
    function handleDeleteClick(e){
        let url = 'http://localhost:8080/yongdons/'+dataDetail.seq
        fetch( url , {
            method: 'DELETE'
          })
            .then((response) => {
                console.log(response)
                alert("삭제완료")
                //자동 목록이동
                navigate("/list")
            })
    }

    return <>
        <h1>용돈상세</h1>
        <div>
            <h3>상세보기</h3>
            <p>번호 : {dataDetail.seq}</p>
            <p>날짜 : {dataDetail.dt}</p>
            <p>구분 : {dataDetail.gubun}</p>
            <p>사용처 : {dataDetail.sayong}</p>
            <p>내용 : {dataDetail.naeyong}</p>
            <p>지불수단 : {dataDetail.sudan}</p>
            <p>금액 : {dataDetail.gumaek}</p>
            <button onClick={handleUpdateClick}>수정하기</button>
            <button onClick={handleDeleteClick}>삭제하기</button>
            <button onClick={(e)=>{
                    navigate("/")
                }}>메인</button>
                <button onClick={(e)=>{
                    navigate("/list")
                }}>목록</button>

        </div>

    </>
}
