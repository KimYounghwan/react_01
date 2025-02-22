import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MenuAdminUpdatePage(props) {
    const {menuno} = useParams()
    const navigate = useNavigate()


    const [menuData, setMenuData] = useState({})
    
    const upf = useRef(0)

    // let menuno2 = 6;//테스트용 번호. 통합할경우 지워야함

    function fetchOne(){
        let url = 'http://localhost:8080/menus/'+menuno
        fetch( url )
        .then((response) => response.json())
        .then((json) => {
            console.log("fetchOne : ",json)
            setMenuData(json.data)
            upf.current.no.value=json.data.no
            upf.current.gubun.value=json.data.gubun
            upf.current.name.value=json.data.name
            upf.current.price.value=json.data.price
            upf.current.sayong.value=json.data.sayong
        });
    }
    function deleteOne(){
        let url = 'http://localhost:8080/menus/'+menuno
        fetch( url , {
            method: 'DELETE'
          })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        });
    }

    useEffect(fetchOne,[])


    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        //체크안하면 "N"으로 설정해줌
        data.sayong = (data.sayong)?data.sayong:"N"
        console.log(data);

        let url = 'http://localhost:8080/menus'
        fetch( url , {
            method: 'POST', //새로운값 추가시 POST
            body: JSON.stringify(data),//추가할객체
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then((response) => response.json())
        .then((json) => {
            alert("수정완료")
            console.log(json)
            navigate("/admin/list")
        });
    }

    return (
        <div>
            <h1>메뉴수정</h1>
            <form ref={upf} onSubmit={handleSubmit}>
                <label>
                메뉴번호 : {menuData.no}
                <input type='hidden' name='no'></input>
                </label><br></br>
                <label>
                    구분 : 
                    <select name="gubun">
                        <option>식사</option>
                        <option>간식</option>
                    </select>
                </label><br></br>
                <label>
                    메뉴명 : 
                    <input name='name'></input>
                </label><br></br>
                <label>
                    가격 : 
                    <input type="number" name='price'></input>
                </label><br></br>
                <label>
                    사용여부 : 
                    <input type="checkbox" name='sayong' value="Y"></input>
                </label><br></br>
                <input type='submit' value="수정"></input>
                <button onClick={(e)=>{
                    navigate("/admin/list")
                }}>목록</button>
                <button onClick={deleteOne}>삭제</button>
            </form>
        </div>
    );
}

export default MenuAdminUpdatePage;