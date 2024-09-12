import React,{useState} from 'react';
import IfGreeting from './IfGreeting';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoginClick = ()=>{
        setIsLoggedIn(true) 
    }
    const handleLogoutClick = ()=>{
        setIsLoggedIn(false)
    }

    let button;
    if(isLoggedIn)
        button = <LogoutButton onClick={handleLogoutClick} />
    else
        button = <LoginButton onClick={handleLoginClick} />

    return (
        <div>
            <IfGreeting isLoggedIn={isLoggedIn} />    
            {button}
        </div>
    );
}

export default LoginControl;