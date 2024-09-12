import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MenuAdminOrderPage(props) {
    const navigate = useNavigate()
    const [ listData, setListData ] = useState([])

    function fetchList(){
        let url = 'http://localhost:8080/orders'
        fetch( url )
        .then((response) => response.json())
        .then((json) => {
            console.log("fetchList : ",json)
            setListData(json.data)
        });
    }
    
    useEffect(fetchList,[])

    return (
        <>
        <h1>주문관리</h1>
        <div>
            <select>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
            </select>
            <select>
                <option>1월</option>
                <option>2월</option>
                <option>3월</option>
                <option>4월</option>
                <option>5월</option>
                <option>6월</option>
                <option>7월</option>
                <option>8월</option>
                <option>9월</option>
                <option>10월</option>
                <option>11월</option>
                <option>12월</option>
            </select>
            <button onClick={(e)=>{
                navigate("/")
            }}>메인</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>주문번호</th>
                        <th>테이블번호</th>
                        <th>주문일시</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.map((dt,index)=>{
                        return <tr key={index}>
                            <td><a href="#" onClick={(e)=>{
                                e.preventDefault()
                                navigate("/admin/orders/"+dt.no+"/details")
                            }}>{dt.no}</a></td>
                            <td>{dt.tableNo}</td>
                            <td>{dt.orderDatetime}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default MenuAdminOrderPage;