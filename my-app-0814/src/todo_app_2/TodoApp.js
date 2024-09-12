import React, { useState } from 'react';
import TodoInputPage from './TodoInputPage';
import TodoMainPage from './TodoMainPage';
import TodoDetailPage from './TodoDetailPage';

function TodoApp(props) {
    let mode = "main";
    let page = null;
    if( mode == "main" )
        page = <TodoMainPage  />; //화면에 보여줄 내용
    else if( mode == "input" )
        page = <TodoInputPage />; //화면에 보여줄 내용
    else if( mode == "detail" ){
        page = <TodoDetailPage />; //화면에 보여줄 내용
    }else {
        page = <ErrorPage />; //화면에 보여줄 내용
    }
    return (
        <div>
            {page}
        </div>
    );
}

export default TodoApp;