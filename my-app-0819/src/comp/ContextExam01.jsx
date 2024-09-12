import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const MyContext = createContext("Welcome")

function ContextExam01(props) {
    return (
        <>
        <MyContext.Provider value='Hello'>
            <ShowContext />
        </MyContext.Provider>
        <MyContext.Provider value='Hi'>
            <ShowContext />
        </MyContext.Provider>
        </>
    );
}
function ShowContext(){
    const value = useContext(MyContext)
    return (
        <>
            <div>{value}</div>
            
            <MyContext.Consumer>
            {(value) => <div>{value}</div>}
            </MyContext.Consumer>
        </>
    )
}

export default ContextExam01;