import React from 'react';
import GawibawiboHeader from './GawibawiboHeader';
import GawibawiboInput from './GawibawiboInput';
import GawibawiboResult from './GawibawiboResult';
import { useState } from 'react';
import GawibawiboIntro from './GawibawiboIntro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GawibawiboGame(props) {

    const [mode, setMode ] = useState("intro"); // "main" 화면 컨트롤용 글자
    const [resultList, setResultList ] = useState([]) // 하단 게임 결과
    const [winCount, setWinCount] = useState(0); // 이긴횟수
    
    // if문 대신 사용
    // 0,1,2 -> a,b,c 로 변환 => 배열 이용
    // a,b,c -> 객체 로 변환 => 객체의 키,값 이용
    // 파이썬의 dict -> 자바스크립트의 객체
    let pageObj = {
        "intro":<GawibawiboIntro changePage={changePage} />,
        "main": <>
                    <GawibawiboInput onButtonClick={checkResult}/>
                    <GawibawiboResult 
                        winCount={winCount} 
                        resultList={resultList}/>
                </>
    }
    //보여줄 컴포넌트 설정
    let page = pageObj[mode];
    //화면 전환용 함수
    function changePage( pageName ){ 
        setMode(pageName)
    }
    //가위 바위 보 판정 함수
    function checkResult( userNum ){
        //10회이면 중지
        if(resultList.length==10) return;
        const gbb = "가위,바위,보".split(",")
        //난수 생성. 0=가위  1=바위  2=보
        const comNum = Math.floor(Math.random()*3)//0,1,2
        let r = "사람 승" //판정결과
        if( userNum == comNum ){
            r = "비김"
        }else if( (comNum == 0 & userNum == 2) || 
                    (comNum == 1 && userNum == 0) ||
                    (comNum == 2 && userNum == 1)){ //사람 패한 경우만 계산
            r = "사람 패"
        }else{
            setWinCount(winCount+1)
        }
        let rs = `사람=${gbb[userNum]} : 컴퓨터=${gbb[comNum]} =>${r}`        
        setResultList( [...resultList, rs] )
    }

    return (
        <Container>
        <Row>
          <Col>
            <GawibawiboHeader />
            {page}
          </Col>
        </Row>
      </Container>
  
    );
}

export default GawibawiboGame;