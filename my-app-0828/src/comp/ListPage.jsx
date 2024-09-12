//목록페이지
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function ListPage(props){
    const navigate = useNavigate()

    //목록용
    const [dataList, setDataList] = useState([])

    function handleListClick(e){
        let url = 'http://localhost:8080/yongdons'
        fetch( url )
        .then((response) => response.json())
        .then((json) => {
            // console.log(json)
            swal("로딩완료","목록이 업데이트되었습니다","success");
            setDataList(json)
        });
    }
    //1. 종속성배열생략: 렌더링할때마다 실행
    //2. 빈종속성배열: 최초렌더링후 실행, 리렌더링때 실행
    //3. 종속성배열에 변수있으면 변수가 수정될때마다 실행

    useEffect(()=>{
        handleListClick()
    },[])

    return <>
        <h1>용돈목록</h1>
        <button onClick={handleListClick}>새로고침</button>
        <button onClick={(e)=>{
            navigate("/")
        }}>메인</button>
        <div>
            <table style={{width:"250px", border:"1px solid black"}}>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>금액</th>
                        <th>날짜</th>
                        <th>용도</th>
                    </tr>
                </thead>
                <tbody>
                { dataList.map((dt,index)=>{
                    return <tr key={index}>
                        <td>{dt.gubun}</td>
                        <td>{dt.gumaek}</td>
                        <td><a href="#" onClick={(e)=>{
                            e.preventDefault();

                            navigate("/detail/"+dt.seq)
                        }}>{dt.dt}</a></td>
                        <td>{dt.sayong}</td>
                        </tr>
                }) }
                </tbody>
                
            </table>
        </div>

    </>
}
