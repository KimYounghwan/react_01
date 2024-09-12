import {
    BrowserRouter,
    Routes, 
    Route,
    useNavigate
} from "react-router-dom"
import MainPage from "./MainPage";
import ListPage from "./ListPage";
import DetailPage from "./DetailPage";
import UpdatePage from "./UpdatePage";
import InputPage from "./InputPage";
import NotFoundPage from "./NotFoundPage";


function YongdonCrud01(props) {
    return <>
        <BrowserRouter >
            <Routes>
                <Route index element={ <MainPage /> }/>
                <Route path="/list" element={ <ListPage /> }/>
                <Route path="/detail/:seq" element={ <DetailPage /> }/>
                <Route path="/update/:seq" element={ <UpdatePage /> }/>
                <Route path="/input" element={ <InputPage /> }/>
                <Route path="*" element={ <NotFoundPage   /> }/>
            </Routes>
        </BrowserRouter>
    </>
}

export default YongdonCrud01;