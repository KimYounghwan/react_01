import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import data from './data.json';

const MainTitleText = styled.p`       
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {

    const [ blogData, setBlogData ] = useState( data ) 
    //새로운 블로그글 등록
    function addBlogData( data ){
        data.id = blogData[blogData.length-1].id + 1 // 기존블로그 끝글 id+1
        let _blogData = [ ...blogData, data ]
        setBlogData( _blogData )
    }

    return (
        <BrowserRouter>
            <MainTitleText>소플의 미니 블로그</MainTitleText>
            <Routes>
                <Route index element={<MainPage data={blogData}/>} />
                <Route path="post-write" 
                    element={<PostWritePage 
                    onAddBlogData={addBlogData} />} />
                <Route path="post/:postId" element={<PostViewPage  data={blogData}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
