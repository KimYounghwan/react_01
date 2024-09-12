import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function GawibawiboIntro(props) {
    function handleClick(){
        props.changePage("main")
    }
    return (
        <div>
            <Card>
            <Card.Body>
                <Card.Title>게임시작</Card.Title>
                <Button  onClick={handleClick} style={{width:260, height:80, fontSize:"2em"}} variant="outline-primary">게임시작</Button>
                <Card.Title>게임시작 버튼을 눌러 시작하세요</Card.Title>
            </Card.Body>
            </Card>
        </div>
    );
}

export default GawibawiboIntro;