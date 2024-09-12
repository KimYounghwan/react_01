import React from 'react';

function MySummary(props) {

    const nums = [10,20,30,]

    return (
        <div>
            {
                nums.length > 0 ?
                <p>총합 = { nums.reduce(  (a,b)=>a+b   ) }</p> :
                <p>빈배열입니다</p>
            }
        </div>
    );
}

export default MySummary;