import React,{useState, useMemo} from 'react';

function UseMemoTest(props) {
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const [count, setCount] = useState(0);
  
    // 배열합
    // const sum = arr.reduce((a, b) => a + b);
    // console.log("배열합계산");
    const sum = useMemo(() => {
        console.log("배열합계산");
        return arr.reduce((a, b) => a + b);
    }, [arr, arr.length]);


  
    // 카운트클릭
    const handleClick = () => {
      setCount((prev) => prev + 1);
    };
    
    // 배열값추가
    const addArr = () => {
      setArr((prev) => {
        let copy = [...prev];
        let max = Math.max(...copy);
        return [...prev, max + 1];
      });
    };
    
    // 배열값변경
    const changeArr = () => {
      setArr((prev) => {
        let copy = [...prev];
        copy[copy.length - 1] += 1;
        return [...copy];
      });
    };
  
    return (
      <>
        <div>
          <div>배열 : {arr}</div>
          <div>배열합 : {sum}</div>
          <div>
            <button onClick={handleClick}>카운트 : {count}</button>
          </div>
          <div>
            <button onClick={addArr}>배열값추가</button>
            <button onClick={changeArr}>배열값변경</button>
          </div>
        </div>
      </>
    );
  
}

export default UseMemoTest;