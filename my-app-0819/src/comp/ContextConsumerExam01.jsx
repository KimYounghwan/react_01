import React, { createContext } from 'react'; 

const MyContext = createContext('defaultValue');

// ContextExam02 컴포넌트
export default function ContextConsumerExam01() {
  return (
    <>
    <MyContext.Provider value="myValue">
      <Child />
    </MyContext.Provider>
    </>
  );
}

// Child 컴포넌트
function Child() {
  return (
    <MyContext.Consumer>
      {(value) => <div>{value}</div>}
    </MyContext.Consumer>
  );
}