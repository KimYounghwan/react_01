import React from 'react';

function UserGreeting(){
    return <h1>다시오셨군요</h1>
}
function GuestGreeting(){
    return <h1>회원가입 해주세요</h1>
}

function IfGreeting(props) {

    if(props.isLoggedIn)
        return <UserGreeting />
    return <GuestGreeting />
}

export default IfGreeting;