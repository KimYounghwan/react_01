import React from 'react';
import Box1 from './Box1';
import Button1 from './Button1';

function BoxButtonApp(props) {
    return (
    <div className="App">
        <Button1 size='big'></Button1>
        <Button1 size='small'></Button1>
        <Box1 size='big'></Box1>
        <Box1 size='small'></Box1>
    </div>
      );
}

export default BoxButtonApp;