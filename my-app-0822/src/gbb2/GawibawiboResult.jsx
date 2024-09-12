import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GawibawiboResult(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        resetGame()
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const {winCount, resultList, resetGame} = props

    function checkEnd(){
        if(resultList.length==10){
            setShow(true);
        }
    }
    useEffect( checkEnd )
  
    return (
        <div>
            {resultList.length>=10 ? <h3>게임종료</h3>: <h3>10회중 {resultList.length+1}번째 선택</h3>}
            <hr></hr>
            <h3>승률: {((winCount/resultList.length)*100).toFixed(2)} %</h3>
            <ListGroup>
                {resultList.map((r,index)=>{
                    return <ListGroup.Item key={index}>{r}</ListGroup.Item>
                })}
            </ListGroup>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
            <Modal.Title>게임 알림</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            게임이 종료되었습니다. 게임을 다시 하시겠습니까?
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                새로운 게임 시작
            </Button>
            <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
}

export default GawibawiboResult;