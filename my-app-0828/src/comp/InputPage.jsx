import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


//등록페이지
export default function InputPage(props){
    const navigate = useNavigate()

    function handleCreateClick(e){
        let ff = e.target
        const formData = new FormData(e.target);
        //<form>에 현재 입력된 값 추출하여 객체에 저장
        const data = Object.fromEntries(formData.entries());
        console.log("data=",data)//입력된값 출력
        ff.dt.value = "" //입력값 삭제
        ff.gumaek.value = "" //입력값 삭제
        ff.naeyong.value = "" //입력값 삭제
        ff.sayong.value = "" //입력값 삭제

        let url = 'http://localhost:8080/yongdons'
        fetch( url , {
            method: 'POST', //새로운값 추가시 POST
            body: JSON.stringify(data),//추가할객체
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                alert("등록완료")
                console.log(json)
            });
    }

    function handleSubmit(e){
        e.preventDefault()

        handleCreateClick(e)
    }
    return <>
        <h1>용돈등록</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label>날짜 : 
                    <input type='date' name='dt' required></input>
                </label><br></br>
                <label>구분 : 
                    <select name='gubun'  required>
                        <option>지출</option>
                        <option>수입</option>
                    </select>
                </label><br></br>
                <label>사용처 : 
                    <input type='text' name='sayong' required></input>
                </label><br></br>
                <label>내용 : 
                    <input type='text' name='naeyong' required></input>
                </label><br></br>
                <label>지불수단: 
                    <select name='sudan' required>
                        <option>현금</option>
                        <option>카드</option>
                    </select>
                </label><br></br>
                <label>금액 : 
                    <input type='number' name='gumaek' required></input>
                </label><br></br>
                <input type='submit' value='용돈등록'></input>
                <button onClick={(e)=>{
                    navigate("/")
                }}>메인</button>
                <button onClick={(e)=>{
                    navigate("/list")
                }}>목록</button>
            </form>
        </div>
    </>
}
