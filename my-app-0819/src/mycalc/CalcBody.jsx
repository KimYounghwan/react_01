import React from 'react';
import { useContext } from 'react';
import CalcContext from './CalcContext';

function CalcBody(props) {
    const calc2 = useContext(CalcContext);

    function handleSubmit(e){
        e.preventDefault();//화면리로딩 방지
        let exp = ""
        exp += e.target.n1.value
        exp += e.target.opr.value
        exp += e.target.n2.value
        console.log( "exp=",exp )
        // props.calc( exp )
        calc2( exp )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input size="5" name='n1'></input>
                <select  name='opr'>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <input  size="5" name='n2'></input>
                <input type='submit' value="계산"></input>
            </form>
        </div>
    );
}

export default CalcBody;