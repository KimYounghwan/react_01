import React, { createContext, useContext } from 'react';

const MyContext = createContext('defaultValue'); // createContext로 컨텍스트를 만들고

// App 컴포넌트
export default function UseContextExam() {
  return (
    <MyContext.Provider value="하이"> 
      <Child />
    </MyContext.Provider>
  );
}

// Child 컴포넌트
function Child() {
  const value = useContext(MyContext); // useContext를 사용하여 value값을 가져온다.
  return <div>{value}</div>;
}
