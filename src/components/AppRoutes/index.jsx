import { HashRouter as Router, Routes, Route } from "react-router";

import DefaultLayout from '../../layouts/DefaultLayout';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import ModalDemo from '../../pages/ModalDemo';
import ScrollDemo from '../../pages/ScrollDemo';

function AppRoutes()  {
    return <Router>
        <Routes>
            <Route element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}></Route>
            </Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/modal-demo" element={<ModalDemo/>}></Route>
            <Route path="/scroll-demo" element={<ScrollDemo/>}></Route>
        </Routes>
    </Router>
}

export default AppRoutes;