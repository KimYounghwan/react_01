import React from 'react';
import MyHello from './MyHello';

function MyGreetings(props) {
    return (
        <div>
            <MyHello name="홍" msg="반가워요"/>
            <MyHello name="김" msg="방가방가"/>
            <MyHello name="KIM" msg="Hello~"/>
        </div>
    );
}

export default MyGreetings;