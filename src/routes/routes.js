import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home/index.js'
import Sobre from '../pages/Sobre/index.js'
import Produto from "../pages/Produto/index.js";
import Geral from "../pages/Filter/geral.js";

export default function RoutesApp () {
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/sobre" element={ <Sobre/> }/>
            <Route path="/produto/:title/:id" element={ <Produto/> }/>
            <Route path="/filter/:name" element={ <Geral/> }/>
        </Routes>
    )
}