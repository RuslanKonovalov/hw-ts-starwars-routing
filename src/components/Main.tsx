import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {Route, Routes} from "react-router";
import {navItems} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {

    return (
        <Routes>
            {['/', `${navItems[0].path}`].map(path => <Route key={path} path={path} element={<Home/>}/>)}
            {[`${navItems[1].path}`, `${navItems[1].path}/:heroId`].map(path => <Route key={path} path={path} element={<AboutMe/>}/>)}
            <Route path={`${navItems[2].path}`} element={<StarWars/>}/>
            <Route path={`${navItems[3].path}`} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
};

export default Main;