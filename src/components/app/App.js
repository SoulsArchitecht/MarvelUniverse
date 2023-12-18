import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
//const SingleComicsPage = lazy(() => import('../pages/SingleComicsPage'));
const SingleComicsLayout = lazy(() => import('../pages/singleComicsLayout/SingleComicsLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));


const App = () => {

        return (
            <Router>
                <div className="app">
                    <AppHeader/>
                    <main>
                        <Suspense fallback={<Spinner/>}>
                            <Routes>
                                <Route path="/comics" element={<ComicsPage/>}/> 
                                <Route path="/comics/:id" element={<SingleComicsLayout/>} dataType='comics'/> 
                                <Route path="/characters/:id" element={<SingleCharacterLayout/>}/>                
                                <Route path="/" element={<MainPage/>}/>
                                <Route path="*" element={<Page404/>}/>
                            </Routes>                            
                        </Suspense>
                    </main>
                </div>                
            </Router>
        )
}

export default App;