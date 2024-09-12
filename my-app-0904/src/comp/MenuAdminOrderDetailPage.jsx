import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MenuAdminOrderDetailPage(props) {
    const navigate = useNavigate()
    const [ listData, setListData ] = useState([])
    const {orderNo} = useParams()

    function fetchList(){
        let url = 'http://localhost:8080/orders/'+orderNo+'/details'
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
        <h1>주문상세</h1>
        <div>
            <button onClick={(e)=>{
                navigate("/admin/order")
            }}>목록</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>주문번호</th>
                        <th>테이블번호</th>
                        <th>메뉴</th>
                        <th>갯수</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.map((dt,index)=>{
                        return <tr key={index}>
                            <td>{dt.no}</td>
                            <td>{dt.tableNo}</td>
                            <td>{dt.menuNo}</td>
                            <td>{dt.amount}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

        </>
    );
}

export default MenuAdminOrderDetailPage;