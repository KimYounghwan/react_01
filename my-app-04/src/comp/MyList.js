import React from 'react';

function MyList(props) {

    const nums = [10,20,30,]

    const numlist = nums.map((n,index)=>
        <li key={index}>{n}</li>
    );

    return (
        <div>
            <ul>
                {numlist}
            </ul>
        </div>
    );
}

export default MyList;