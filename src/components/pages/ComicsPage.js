//import {Routes, Route} from 'react-router-dom';
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
//import SingleComicsPage from "./SingleComicsPage";

const ComicsPage = () => {

    return (
        <>
            <AppBanner />
            {/* <Routes>
                <Route>
                    <Route path=":id" element={<SingleComicsPage/>}/>
                    <Route path="/" element={<ComicsList/>}/>
                </Route>
            </Routes> */}
            <ComicsList />
        </>
    )
}

export default ComicsPage;