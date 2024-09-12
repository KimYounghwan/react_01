import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


//수정페이지
export default function UpdatePage(props){
    const navigate = useNavigate()
    const { seq } = useParams();

    // //상세보기용
    // const [dataDetail, setDataDetail] = useState([])
    
    useEffect( fetchOne, [] )

    function fetchOne(){
        let url = 'http://localhost:8080/yongdons/'+seq
        // alert(url)
        fetch( url )
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            // setDataDetail(json)
            handleUpdateClick(json)
        });
    }


    function handleUpdateSubmit(e){
        e.preventDefault()

        let ff = e.target
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("data=",data)
        ff.dt.value = "" //입력값 삭제
        ff.gumaek.value = "" //입력값 삭제
        ff.naeyong.value = "" //입력값 삭제
        ff.sayong.value = "" //입력값 삭제

        let url = 'http://localhost:8080/yongdons'
        fetch( url , {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                alert("수정완료")
            });
    }

    //상세보기의 수정하기버튼
    let upf = useRef(0)//<form>에서 참조중

    function handleUpdateClick(dataDetail){
        upf.current.seq.value = dataDetail.seq
        upf.current.dt.value = dataDetail.dt
        upf.current.gubun.value = dataDetail.gubun
        upf.current.sayong.value = dataDetail.sayong
        upf.current.naeyong.value = dataDetail.naeyong
        upf.current.sudan.value = dataDetail.sudan
        upf.current.gumaek.value = dataDetail.gumaek
    }

    return <>
        <h1>용돈수정</h1>
        <div>
            <h2>수정하기화면</h2>
            <form ref={upf}  onSubmit={handleUpdateSubmit}>
                    <input type='hidden'  name='seq' ></input>
                <label>날짜 : 
                    <input type='date' name='dt' ></input>
                </label><br></br>
                <label>구분 : 
                    <select name='gubun' >
                        <option>지출</option>
                        <option>수입</option>
                    </select>
                </label><br></br>
                <label>사용처 : 
                    <input type='text' name='sayong' ></input>
                </label><br></br>
                <label>내용 : 
                    <input type='text' name='naeyong' ></input>
                </label><br></br>
                <label>지불수단: 
                    <select name='sudan'  >
                        <option>현금</option>
                        <option>카드</option>
                    </select>
                </label><br></br>
                <label>금액 : 
                    <input type='number' name='gumaek'  ></input>
                </label><br></br>
                <input type='submit' value='용돈수정'></input>
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
